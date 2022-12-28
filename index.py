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

import rakutenapi

app = Flask(__name__)
app.secret_key = os.environ['APP_SECRET_KEY']
app.permanent_session_lifetime = timedelta(minutes=5)

AREA_NUM = 3

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
    for area_idx in range(AREA_NUM):
        
        # 地域を抽選し情報を取得
        area_info = rakutenapi.AreaInfo()
        area_info.load_from_api(area_data_json)

        # リストに格納
        area_info_list.append(area_info)
        area_info_dict_list.append(area_info.get_dict())

        # セッションに保存
        session[f'area_info_json_{area_idx}'] = area_info.get_json()

    return render_template(
        'select.html',
        area_num = AREA_NUM,
        area_info_dict_list = area_info_dict_list
        )

@app.route('/result/<int:selected_area>', methods=['GET'])
def result(selected_area):

    # 選択された地域の情報をセッションから取得
    area_info_list = []
    for area_idx in range(AREA_NUM):
        area_info = rakutenapi.AreaInfo()
        area_info.load_from_session(session[f'area_info_json_{area_idx}'])
        area_info_list.append(area_info)
    area_info = area_info_list[selected_area]
    area_info_dict = area_info.get_dict()

    # 地域全体のホテル情報をjsonで取得
    hotel_data_json = rakutenapi.get_hotel_data_json(area_info=area_info)

    # ホテルを抽選し情報を取得
    hotel_info = rakutenapi.HotelInfo()
    hotel_info.load_from_api(hotel_data_json)

    # 辞書に変換
    hotel_info_dict = hotel_info.get_dict()

    return render_template(
        'result.html', 
        area_info_dict = area_info_dict,
        hotel_info_dict = hotel_info_dict
        )

if __name__ == '__main__':
    app.debug = True
    app.run(threaded=True)
    