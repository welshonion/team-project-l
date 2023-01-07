import aichi from '../figs/prefs/aichi.png';
import akita from '../figs/prefs/akita.png';
import aomori from '../figs/prefs/aomori.png';
import chiba from '../figs/prefs/chiba.png';
import ehime from '../figs/prefs/ehime.png';
import fukui from '../figs/prefs/fukui.png';
import fukuoka from '../figs/prefs/fukuoka.png';
import fukushima from '../figs/prefs/fukushima.png';
import gifu from '../figs/prefs/gifu.png';
import gunma from '../figs/prefs/gunma.png';
import hiroshima from '../figs/prefs/hiroshima.png';
import hokkaidou from '../figs/prefs/hokkaidou.png';
import hyougo from '../figs/prefs/hyougo.png';
import ibaraki from '../figs/prefs/ibaraki.png';
import ishikawa from '../figs/prefs/ishikawa.png';
import iwate from '../figs/prefs/iwate.png';
import kagawa from '../figs/prefs/kagawa.png';
import kagoshima from '../figs/prefs/kagoshima.png';
import kanagawa from '../figs/prefs/kanagawa.png';
import kouchi from '../figs/prefs/kouchi.png';
import kumamoto from '../figs/prefs/kumamoto.png';
import kyouto from '../figs/prefs/kyouto.png';
import mie from '../figs/prefs/mie.png';
import miyagi from '../figs/prefs/miyagi.png';
import miyazaki from '../figs/prefs/miyazaki.png';
import nagano from '../figs/prefs/nagano.png';
import nagasaki from '../figs/prefs/nagasaki.png';
import nara from '../figs/prefs/nara.png';
import niigata from '../figs/prefs/niigata.png';
import okayama from '../figs/prefs/okayama.png';
import okinawa from '../figs/prefs/okinawa.png';
import ooita from '../figs/prefs/ooita.png';
import osaka from '../figs/prefs/osaka.png';
import saga from '../figs/prefs/saga.png';
import saitama from '../figs/prefs/saitama.png';
import shiga from '../figs/prefs/shiga.png';
import shimane from '../figs/prefs/shimane.png';
import shizuoka from '../figs/prefs/shizuoka.png';
import tochigi from '../figs/prefs/tochigi.png';
import tokushima from '../figs/prefs/tokushima.png';
import tokyo from '../figs/prefs/tokyo.png';
import tottori from '../figs/prefs/tottori.png';
import toyama from '../figs/prefs/toyama.png';
import wakayama from '../figs/prefs/wakayama.png';
import yamagata from '../figs/prefs/yamagata.png';
import yamaguchi from '../figs/prefs/yamaguchi.png';
import yamanashi from '../figs/prefs/yamanashi.png';

import React from 'react'

const imgDict = {
    愛知県 : aichi,
    秋田県 : akita,
    青森県 : aomori,
    千葉県 : chiba,
    愛媛県 : ehime,
    福井県 : fukui,
    福岡県 : fukuoka,
    福島県 : fukushima,
    岐阜県 : gifu,
    群馬県 : gunma,
    広島県 : hiroshima,
    北海道 : hokkaidou,
    兵庫県 : hyougo,
    茨城県 : ibaraki,
    石川県 : ishikawa,
    岩手県 : iwate,
    香川県 : kagawa,
    鹿児島県 : kagoshima,
    神奈川県 : kanagawa,
    高知県 : kouchi,
    熊本県 : kumamoto,
    京都府 : kyouto,
    三重県 : mie,
    宮城県 : miyagi,
    宮崎県 : miyazaki,
    長野県 : nagano,
    長崎県 : nagasaki,
    奈良県 : nara,
    新潟県 : niigata,
    岡山県 : okayama,
    沖縄県 : okinawa,
    大分県 : ooita,
    大阪府 : osaka,
    佐賀県 : saga,
    埼玉県 : saitama,
    滋賀県 : shiga,
    島根県 : shimane,
    静岡県 : shizuoka,
    栃木県 : tochigi,
    徳島県 : tokushima,
    東京都 : tokyo,
    鳥取県 : tottori,
    富山県 : toyama,
    和歌山県 : wakayama,
    山形県 : yamagata,
    山口県 : yamaguchi,
    山梨県 : yamanashi, 
};

const ImgPrefs = (props) => {
    const prefs = props.prefs;
    const width = props.width;
    return <img src={imgDict[prefs]} width ={width} alt={prefs} />
}
 
export default ImgPrefs;