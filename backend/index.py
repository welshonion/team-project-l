# -*- coding: utf-8 -*-

import sys
sys.path.append('../')

try:
    import config
    config.write_environ()

except:
    print("config.pyファイルを親階層に配置してください!!")
    print("Place the config.py file in the parent directory!!")
    print("詳細はReadmeファイルを参照してください")
    print("config.pyは動作に必要なため、この動作は想定された動作です")
    print("プログラムを終了します")

    sys.exit()

import os,json
from flask import Flask, render_template, request, redirect, url_for, session, make_response, jsonify
from flask_cors import CORS
from datetime import timedelta
import requests
import random

import rakutenapi

app = Flask(__name__)
app.secret_key = os.environ['APP_SECRET_KEY']
app.permanent_session_lifetime = timedelta(minutes=5)
CORS(app)
AREA_NUM = 3
HOTEL_NUM = 3

# ホーム画面
@app.route('/')
def index():
    return render_template('index.html')

# 地域選択
@app.route('/select')
def select():

    # 日本全体の地域情報をjsonで取得
    area_data_json = rakutenapi.get_area_data_json()

    # 指定数だけ地域情報を取得
    area_info_list = []
    area_info_dict_list = []

    prefs = area_data_json['areaClasses']['largeClasses'][0]['largeClass'][1]['middleClasses']
    #print(len(prefs))
    pref_idx_list = random.sample(list(range(0,len(prefs))),HOTEL_NUM)
    #print(pref_idx_list)
    for i in range(AREA_NUM):
        
        # 地域を抽選し情報を取得
        area_info = rakutenapi.AreaInfo()
        area_info.load_from_api(area_data_json, pref_idx_list[i])

        # リストに格納
        area_info_list.append(area_info)
        area_info_dict_list.append(area_info.get_dict())

        # セッションに保存
        session[f'area_info_json_{i}'] = area_info.get_json()

    # return render_template(
    #     'select.html',
    #     area_num = AREA_NUM,
    #     area_info_dict_list = area_info_dict_list
    #     )
    
    response = {"area_num" : AREA_NUM,
                "area_info_dict_list" : area_info_dict_list}


    return make_response(jsonify(response))


# @app.route('/result/<int:selected_area>', methods=['GET'])
# def result(selected_area):
@app.route('/result', methods=['GET','POST'])
def result():
    # # 選択された地域の情報をセッションから取得
    # for i in range(AREA_NUM):
    #     area_info = rakutenapi.AreaInfo()
    #     # area_info.load_from_session(session[f'area_info_json_{i}'])        
    #     area_info_list.append(area_info)

    # # area_info = area_info_list[selected_area]
    # area_info_dict = area_info.get_dict()

    # # 地域全体のホテル情報をjsonで取得
    # hotel_data_json = rakutenapi.get_hotel_data_json(area_info=area_info)

    # sessionが使えないため，POSTでarea_info_dictを取得，area_info_dictからホテル情報を取得
    data = request.get_json()
    area_info_dict = data['area_info_dict']
    hotel_data_json = rakutenapi.get_hotel_data_json_with_dict(area_info_dict=area_info_dict)
    
    # 指定数だけホテル情報を取得
    hotel_info_list = []
    hotel_info_dict_list = []
    #print(len(hotel_data_json['hotels']))
    hotel_idx_list = random.sample(list(range(0,len(hotel_data_json['hotels']))),HOTEL_NUM)
    #print(hotel_select_idx_list)
    for i in range(HOTEL_NUM):
        # ホテルを抽選し情報を取得
        hotel_info = rakutenapi.HotelInfo()
        hotel_info.load_from_api(hotel_data_json, hotel_idx_list[i])

        # 緯度経度
        print(f"latitude:{hotel_info.latitude}")
        print(f"longitude:{hotel_info.longitude}")

        # リストに格納
        hotel_info_list.append(hotel_info)
        hotel_info_dict_list.append(hotel_info.get_dict())


    # return render_template(
    #     'result.html', 
    #     area_info_dict = area_info_dict,
    #     hotel_num = HOTEL_NUM,
    #     hotel_info_dict_list = hotel_info_dict_list
    #     )
    response = {"area_info_dict" : area_info_dict,
                "hotel_info_dict_list" : hotel_info_dict_list}

    return make_response(jsonify(response))

if __name__ == '__main__':
    app.debug = True
    app.run(threaded=True, host='0.0.0.0', port=5000)
    
