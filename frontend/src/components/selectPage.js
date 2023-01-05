import React from 'react';
import './style.css';
//都道府県画像
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

import {Button, Box} from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

var imglist = [
    aichi,
    akita,
    aomori,
    chiba,
    ehime,
    fukui,
    fukuoka,
    fukushima,
    gifu,
    gunma,
    hiroshima,
    hokkaidou,
    hyougo,
    ibaraki,
    ishikawa,
    iwate,
    kagawa,
    kagoshima,
    kanagawa,
    kouchi,
    kumamoto,
    kyouto,
    mie,
    miyagi,
    miyazaki,
    nagano,
    nagasaki,
    nara,
    niigata,
    okayama,
    okinawa,
    ooita,
    osaka,
    saga,
    saitama,
    shiga,
    shimane,
    shizuoka,
    tochigi,
    tokushima,
    tokyo,
    tottori,
    toyama,
    wakayama,
    yamagata,
    yamaguchi,
    yamanashi,
];

//都道府県名リスト(画像リストの後ろにくっつけて作ろうとしたが画像が表示されなくなったため別途作成)
var namelist = [
    '愛知県',
    '秋田県',
    '青森県',
    '千葉県',
    '愛媛県',
    '福井県',
    '福岡県',
    '福島県',
    '岐阜県',
    '群馬県',
    '広島県',
    '北海道',
    '兵庫県',
    '茨城県',
    '石川県',
    '岩手県',
    '香川県',
    '鹿児島県',
    '神奈川県',
    '高知県',
    '熊本県',
    '京都府',
    '三重県',
    '宮城県',
    '宮崎県',
    '長野県',
    '長崎県',
    '奈良県',
    '新潟県',
    '岡山県',
    '沖縄県',
    '大分県',
    '大阪府',
    '佐賀県',
    '埼玉県',
    '滋賀県',
    '島根県',
    '静岡県',
    '栃木県',
    '徳島県',
    '東京都',
    '鳥取県',
    '富山県',
    '和歌山県',
    '山形県',
    '山口県',
    '山梨県',
];

//ランダム画像表示
var selectnum1 = Math.floor(Math.random() * imglist.length);

do {
    var selectnum2 = Math.floor(Math.random() * imglist.length);
}while (selectnum1 === selectnum2);

do {
    var selectnum3 = Math.floor(Math.random() * imglist.length);
}while (selectnum3 === selectnum1 ||selectnum3 === selectnum2); 


/* ページ間遷移用 */
const handleClick_select1 = () => {
    // 同一タブ内で遷移
    window.location.href = "/result";
  };

const handleClick_select2 = () => {
    // 同一タブ内で遷移
    window.location.href = "/";
  };

class selectPage extends React.Component {   //selectPageクラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <div className='Main'>
                    <h2 className='title'>・どこにする?</h2>
                </div>

                <div className='select'>
                        <Button color="default" variant="contained" size='large' onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' >
                            <table className="place">
                                <tr>
                                    <td><img src={imglist[selectnum1]} width="200" alt="prefectures1" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">{namelist[selectnum1]}  <br/>
                                        ○○市・××市・△△市
                                    </tb>
                                </tr>
                                
                            </table>
                            
                        </Button>
                        

                        <Button color='default' variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' style={{ margin: "5%"}}>
                            <table className="place">
                                <tr>
                                    <td><img src={imglist[selectnum2]}  width="200" alt="prefectures2" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">{namelist[selectnum2]} <br/>
                                    ○○市・××市・△△市
                                    </tb>
                                </tr>
                            </table>
                        </Button>

                        <Button color="default" variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' >
                            <table className="place">
                                <tr>
                                    <td><img src={imglist[selectnum3]}  width="200" alt="prefectures3" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">{namelist[selectnum3]}  <br/>
                                    ○○市・××市・△△市
                                    </tb>
                                </tr>
                            </table>
                        </Button>

                </div>
                
                <h1>
                <div className='return_to_top'>
                    <Box textAlign='center'>
                        <Button color="secondary" variant="contained" size="large" onClick={handleClick_select2} component={Link} to="/" endIcon={<ArrowBackIosIcon />}>
                            トップに戻る
                        </Button>
                    </Box>
                </div>
                </h1>
            </div>
            

        );
    }
}
 
export default selectPage;  
