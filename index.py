# -*- coding: utf-8 -*-

#for local only
import config
config.write_environ()

import os,json
from flask import Flask, render_template, request, redirect, url_for, session
from requests_oauthlib import OAuth1Session
from datetime import timedelta
import requests
import random

app = Flask(__name__)
app.secret_key = os.environ['APP_SECRET_KEY']
app.permanent_session_lifetime = timedelta(minutes=5)

get_area_class_url = 'https://app.rakuten.co.jp/services/api/Travel/GetAreaClass/20131024'
simple_hotel_search_url = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426'

application_id = os.environ['RAKUTEN_APP_ID']

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result')
def authorize():

    print("*****\ndecide hotel")

    #####場所の抽選#####

    # パラメータ設定
    param = {
        "applicationId" : application_id,
        "format" : "json"
    }

    # APIを実行して結果を取得する
    result = requests.get(get_area_class_url, param)
    json_result = result.json()
    #print(json_result)


    # 都道府県の抽選
    middle_classes = json_result['areaClasses']['largeClasses'][0]['largeClass'][1]['middleClasses']
    #print(len(middle_classes))
    middle_idx = random.randint(0,len(middle_classes)-1)
    middle_class_code = middle_classes[middle_idx]['middleClass'][0]['middleClassCode']
    middle_class_name = middle_classes[middle_idx]['middleClass'][0]['middleClassName']
    print(middle_class_name)

    # 地域の抽選
    small_classes = middle_classes[middle_idx]['middleClass'][1]['smallClasses']
    #print(len(small_classes))
    small_idx = random.randint(0,len(small_classes)-1)
    small_class_code = small_classes[small_idx]['smallClass'][0]['smallClassCode'] 
    small_class_name = small_classes[small_idx]['smallClass'][0]['smallClassName'] 
    print(small_class_name)

    detail_existed = len(small_classes[small_idx]['smallClass'])==2

    # 詳細地域の抽選
    if detail_existed:
        detail_classes = small_classes[small_idx]['smallClass'][1]['detailClasses']
        #print(len(detail_classes))
        detail_idx = random.randint(0,len(detail_classes)-1)
        detail_class_code = detail_classes[detail_idx]['detailClass']['detailClassCode'] 
        detail_class_name = detail_classes[detail_idx]['detailClass']['detailClassName'] 
        print(detail_class_name)
    else:
        detail_class_code = 0
        detail_class_name = ""


    #####旅館の抽選#####

    if detail_existed:
        # パラメータ設定
        param = {
            "applicationId" : application_id,
            "format" : "json",
            "largeClassCode" : "japan",
            "middleClassCode" : middle_class_code,
            "smallClassCode" : small_class_code,
            "detailClassCode" : detail_class_code
        }
    else:
        # パラメータ設定
        param = {
            "applicationId" : application_id,
            "format" : "json",
            "largeClassCode" : "japan",
            "middleClassCode" : middle_class_code,
            "smallClassCode" : small_class_code,
        }

    # APIを実行して結果を取得する
    result = requests.get(simple_hotel_search_url, param)
    json_result = result.json()
    #print(json_result)

    # 宿の抽選
    hotels = json_result['hotels']
    #print(len(hotels))
    hotel_idx = random.randint(0,len(hotels)-1)
    hotel = hotels[hotel_idx]['hotel']
    hotel_name = hotel[0]['hotelBasicInfo']['hotelName']
    hotel_rating_ave = hotel[0]['hotelBasicInfo']['reviewAverage']
    hotel_url = hotel[0]['hotelBasicInfo']['hotelInformationUrl']
    print(hotel_name)


    return render_template(
        'result.html', 
        middle = middle_class_name,
        small = small_class_name,
        detail = detail_class_name,
        detail_existed = detail_existed,
        hotel_name = hotel_name,
        hotel_rating_ave = hotel_rating_ave,
        hotel_url = hotel_url
        )

if __name__ == '__main__':
    app.debug = True
    app.run(threaded=True)
    