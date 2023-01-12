// REACTのインポート
import React, { useState,useEffect} from 'react';
import Axios from 'axios';
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
import { Link,useLocation} from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import Map from './Map';



/* ページ間遷移用 */
// const handleClick1 = () => {
//     // 同一タブ内で遷移
//     window.location.href = "/select";
// };

// const handleClick2 = () => {
//     // 同一タブ内で遷移
//     window.location.href = "/";
// };


const ResultPage = () => {
    const [hotelInfoDictList, setHotelInfoDictList] = useState([]);
    const location = useLocation();
    const areaInfoDict = location.state.areaInfoDict;

    const handleClick = (index) => {
        if(hotelInfoDictList.length){
            window.open(hotelInfoDictList[index]["hotel_url"]);
        }
    }

    useEffect(() =>{
        Axios.post("http://127.0.0.1:5000/result",{area_info_dict: areaInfoDict})
            .then((res) => {
                setHotelInfoDictList(res.data.hotel_info_dict_list);
            })
            .catch((error) => {
                console.error(error);
            })   
    // eslint-disable-next-line  
    } , []);
                         
    return (    //画面表示の為のrenderメソッドを定義する
        <div>
            <div className="Main">
                <h1 className="title">あなたの旅行先は...{areaInfoDict !== undefined ? areaInfoDict["middle_class_name"] : ""} {areaInfoDict !== undefined ? areaInfoDict["small_class_name"] : ""}!!</h1>
            </div>

            <div className="box1">
                <h2>周辺の宿泊施設</h2>
            </div>

            <div className="Hotels">
                <Stack direction={"row"} spacing={6} >
                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}> {/* style={{ backgroundColor: "#FFF4E1" }} */}
                            <CardContent>
                                <Typography component="div">
                                    <h2><a target="_blank" href={hotelInfoDictList.length? hotelInfoDictList[0]["hotel_url"] : ""} className='hotel_name'>{hotelInfoDictList.length? hotelInfoDictList[0]["hotel_name"] : ""}</a></h2>
                                </Typography>
                                <Typography variant="body2" >
                                    口コミ評価 : {hotelInfoDictList.length? hotelInfoDictList[0]["hotel_rating_ave"] : ""}
                                </Typography>
                            </CardContent>

                            <Map latitude={hotelInfoDictList.length? hotelInfoDictList[0]["latitude"] : ""} longitude={hotelInfoDictList.length? hotelInfoDictList[0]["longitude"] : ""} hotel_name={hotelInfoDictList.length? hotelInfoDictList[0]["hotel_name"] : ""} />

                            <CardActions>
                                <Button size="small" align="center" onClick={() => handleClick(0)} >予約する！</Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography component="div">
                                    <h2><a target="_blank" href={hotelInfoDictList.length? hotelInfoDictList[1]["hotel_url"] : ""} className='hotel_name'>{hotelInfoDictList.length? hotelInfoDictList[1]["hotel_name"] : ""}</a></h2>
                                </Typography>
                                <Typography variant="body2" >
                                    口コミ評価 : {hotelInfoDictList.length? hotelInfoDictList[1]["hotel_rating_ave"] : ""}
                                </Typography>
                            </CardContent>

                            <Map latitude={hotelInfoDictList.length? hotelInfoDictList[1]["latitude"] : ""} longitude={hotelInfoDictList.length? hotelInfoDictList[1]["longitude"] : ""} hotel_name={hotelInfoDictList.length? hotelInfoDictList[1]["hotel_name"] : ""} />

                            <CardActions>
                                <Button size="small" align="center" onClick={() => handleClick(1)} >予約する！</Button>
                            </CardActions>
                        </Card>
                    </div>

                    <div className="cards">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography component="div">
                                    <h2><a target="_blank" href={hotelInfoDictList.length? hotelInfoDictList[2]["hotel_url"] : ""} className='hotel_name'>{hotelInfoDictList.length? hotelInfoDictList[2]["hotel_name"] : ""}</a></h2>
                                </Typography>
                                <Typography variant="body2" >
                                    口コミ評価 : {hotelInfoDictList.length? hotelInfoDictList[2]["hotel_rating_ave"] : ""}
                                </Typography>
                            </CardContent>

                            <Map latitude={hotelInfoDictList.length? hotelInfoDictList[2]["latitude"] : ""} longitude={hotelInfoDictList.length? hotelInfoDictList[2]["longitude"] : ""} hotel_name={hotelInfoDictList.length? hotelInfoDictList[2]["hotel_name"] : ""} />

                            <CardActions>
                                <Button size="small" align="center" onClick={() => handleClick(2)} >予約する！</Button>
                            </CardActions>
                        </Card>
                    </div>
                </Stack>
            </div>


            <div className="Button-to-SelectPage">
                <Box textAlign='center'>
                    <Button color="secondary" variant="contained" size="large" component={Link} /*onClick={handleClick1}*/ to="/select" endIcon={<ReplayIcon />}>
                        もう一度抽選する
                    </Button>
                </Box>
            </div>

            <div className="Button-to-TopPage">
                <Box textAlign='center'>
                    <Button color="secondary" variant="contained" size="large" component={Link} /*onClick={handleClick1}*/ to="/" endIcon={<ArrowBackIosIcon />}>
                        トップに戻る
                    </Button>
                </Box>
            </div>


            <img src={fig_Daibutu} className="fig_Daibutu" height="320" alt="fig_Daibutu" />
            <img src={fig_Tera} className="fig_Tera" height="400" alt="fig_Tera" />
            <img src={fig_RyokouKaban} className="fig_RyokouKaban" height="200" alt="fig_RyokouKaban" />
            <img src={fig_RyokouKaban2} className="fig_RyokouKaban2" height="140" alt="fig_RyokouKaban2" />
        </div >
    );
    
}

export default ResultPage;

