# -*- coding: utf-8 -*-

import os,json
from flask import Flask, render_template, request, redirect, url_for, session
import requests
import random

get_area_class_url = 'https://app.rakuten.co.jp/services/api/Travel/GetAreaClass/20131024'
simple_hotel_search_url = 'https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426'

application_id = os.environ['RAKUTEN_APP_ID']

class AreaInfo():
    def __init__(self):

        # 都道府県情報
        self.middle_class_code = 0
        self.middle_class_name = ""

        # 地域情報
        self.small_class_code = 0
        self.small_class_name = ""

        # 詳細地域情報まで存在するか
        self.detail_existed = False

        # 詳細地域情報
        self.detail_class_code = 0
        self.detail_class_name = ""

    def load_from_api(self,area_data_json):

        #####場所の抽選#####

        # 都道府県の抽選
        middle_classes = area_data_json['areaClasses']['largeClasses'][0]['largeClass'][1]['middleClasses']
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

        # 都道府県情報
        self.middle_class_code = middle_class_code
        self.middle_class_name = middle_class_name

        # 地域情報
        self.small_class_code = small_class_code
        self.small_class_name = small_class_name

        # 詳細地域情報まで存在するか
        self.detail_existed = detail_existed

        # 詳細地域情報
        self.detail_class_code = detail_class_code
        self.detail_class_name = detail_class_name

        return


    def load_from_session(self,area_info_json):

        area_info_dict = json.loads(area_info_json)
        #print(area_info_dict)
        area_info = json.dumps(area_info_dict)
        #print(area_info_json)

        # 都道府県情報
        self.middle_class_code = area_info_dict['middle_class_code']
        self.middle_class_name = area_info_dict['middle_class_name']

        # 地域情報
        self.small_class_code = area_info_dict['small_class_code']
        self.small_class_name = area_info_dict['small_class_name']

        # 詳細地域情報まで存在するか
        self.detail_existed = area_info_dict['detail_existed']

        # 詳細地域情報
        self.detail_class_code = area_info_dict['detail_class_code']
        self.detail_class_name = area_info_dict['detail_class_name']

        return

    def get_json(self):

        area_info_dict = vars(self)
        area_info_json = json.dumps(area_info_dict)

        return area_info_json
    
    def get_dict(self):

        area_info_dict = vars(self)

        return area_info_dict


class HotelInfo():
    def __init__(self):

        # ホテル情報
        self.hotel_name = ""
        self.hotel_rating_ave = 0
        self.hotel_url = ""

    def load_from_api(self, area_data_json):

        # 宿の抽選
        hotels = area_data_json['hotels']
        #print(len(hotels))
        hotel_idx = random.randint(0,len(hotels)-1)
        hotel = hotels[hotel_idx]['hotel']
        hotel_name = hotel[0]['hotelBasicInfo']['hotelName']
        hotel_rating_ave = hotel[0]['hotelBasicInfo']['reviewAverage']
        hotel_url = hotel[0]['hotelBasicInfo']['hotelInformationUrl']
        print(hotel_name)

        self.hotel_name = hotel_name
        self.hotel_rating_ave = hotel_rating_ave
        self.hotel_url = hotel_url

        return

    def get_dict(self):

        hotel_info_dict = vars(self)

        return hotel_info_dict

def get_area_data_json():

    # パラメータ設定
    param = {
        "applicationId" : application_id,
        "format" : "json"
    }

    # APIを実行して結果を取得する
    result = requests.get(get_area_class_url, param)
    json_result = result.json()
    #print(json_result)

    return json_result


def get_hotel_data_json(area_info):

    #####旅館の抽選#####

    if area_info.detail_existed:
        # パラメータ設定
        param = {
            "applicationId" : application_id,
            "format" : "json",
            "largeClassCode" : "japan",
            "middleClassCode" : area_info.middle_class_code,
            "smallClassCode" : area_info.small_class_code,
            "detailClassCode" : area_info.detail_class_code
        }
    else:
        # パラメータ設定
        param = {
            "applicationId" : application_id,
            "format" : "json",
            "largeClassCode" : "japan",
            "middleClassCode" : area_info.middle_class_code,
            "smallClassCode" : area_info.small_class_code,
        }

    # APIを実行して結果を取得する
    result = requests.get(simple_hotel_search_url, param)
    json_result = result.json()

    return json_result

