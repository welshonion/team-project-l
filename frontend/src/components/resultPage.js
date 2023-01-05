// REACTのインポート
import React from 'react';
// cssファイルのインポート
import './style.css';
// 画像ファイルのインポート
import fig_Tera from '../figs/Tera.png'
import fig_Daibutu from '../figs/DaibutuSama.png'
import fig_RyokouKaban from '../figs/RyokouKaban.png'
import fig_RyokouKaban2 from '../figs/RyokouKaban2.png'
import fig_HotelMan from '../figs/HotelMan.png'
// ボタン・ボックス部品のインポート
import { Button, Box } from '@material-ui/core';
// アイコン部品をインポート(https://mui.com/material-ui/material-icons/ から検索できる)
import ReplayIcon from '@mui/icons-material/Replay';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Map from './Map';



/* ページ間遷移用 */
const handleClick1 = () => {
    // 同一タブ内で遷移
    window.location.href = "/select";
};

const handleClick2 = () => {
    // 同一タブ内で遷移
    window.location.href = "/";
};


class resultPage extends React.Component {   //resultPageクラスにReact.Componentを継承する
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <div className="Main">
                    <h1 className="title">あなたの旅行先は...〇〇県××市!!</h1>
                </div>

                <div className="box1">
                    <p><h2>周辺の宿泊施設</h2></p>
                </div>

                {/* <div className="Hotels">
                    <h2>▶︎ <a href="example.html">○○ホテル</a></h2>
                    <p> 口コミ評価 : ××× </p>

                    <h2>▶︎ <a href="example.html">○○ホテル</a> </h2>
                    <p> 口コミ評価 : ××× </p>

                    <h2> ▶︎ <a href="example.html">○○ホテル</a> </h2>
                    <p> </p>
                </div> */}

                <div className="Hotels">
                    <Stack direction={"row"} spacing={6} >
                        <div className="cards">
                            <Card sx={{ maxWidth: 345 }}> {/* style={{ backgroundColor: "#FFF4E1" }} */}
                                <CardContent>
                                    <Typography component="div">
                                        <h2><a href="example.html">○○ホテル</a></h2>
                                    </Typography>
                                    <Typography variant="body2" >
                                        口コミ評価 : ×××
                                    </Typography>
                                </CardContent>

                                <Map latitude={35.125149386459} longitude={135.95490795595} hotel_name="琵琶湖マリオットホテル" />

                                <CardActions>
                                    {/* 「予約する！」を押すと楽天のページに飛ぶ機能はまだできてないです */}
                                    <Button size="small" align="center">予約する！</Button>
                                </CardActions>
                            </Card>
                        </div>

                        <div className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography component="div">
                                        <h2><a href="example.html">○○ホテル</a></h2>
                                    </Typography>
                                    <Typography variant="body2" >
                                        口コミ評価 : ×××
                                    </Typography>
                                </CardContent>

                                <Map latitude={35.125149386459} longitude={135.95490795595} hotel_name="琵琶湖マリオットホテル" />

                                <CardActions>
                                    <Button size="small" align="center" >予約する！</Button>
                                </CardActions>
                            </Card>
                        </div>

                        <div className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography component="div">
                                        <h2><a href="example.html">○○ホテル</a></h2>
                                    </Typography>
                                    <Typography variant="body2" >
                                        口コミ評価 : ×××
                                    </Typography>
                                </CardContent>

                                <Map latitude={35.125149386459} longitude={135.95490795595} hotel_name="琵琶湖マリオットホテル" />

                                <CardActions>
                                    <Button size="small" align="center">予約する！</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Stack>
                </div>


                <div className="Button-to-SelectPage">
                    <Box textAlign='center'>
                        <Button color="secondary" variant="contained" size="large" onClick={handleClick1} component={Link} to="/select" endIcon={<ReplayIcon />}>
                            もう一度抽選する
                        </Button>
                    </Box>
                </div>

                <div className="Button-to-TopPage">
                    <Box textAlign='center'>
                        <Button color="secondary" variant="contained" size="large" onClick={handleClick2} component={Link} to="/" endIcon={<ArrowBackIosIcon />}>
                            トップに戻る
                        </Button>
                    </Box>
                </div>


                <img src={fig_Daibutu} className="fig_Daibutu" height="320" alt="fig_Daibutu" />
                <img src={fig_Tera} className="fig_Tera" height="400" alt="fig_Tera" />
                <img src={fig_RyokouKaban} className="fig_RyokouKaban" height="200" alt="fig_RyokouKaban" />
                <img src={fig_RyokouKaban2} className="fig_RyokouKaban2" height="140" alt="fig_RyokouKaban2" />
                <img src={fig_HotelMan} className="fig_HotelMan" height="160" alt="fig_HotelMan" />

            </div >
        );
    }
}

export default resultPage;

