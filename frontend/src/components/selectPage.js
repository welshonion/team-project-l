import React,{useState,useEffect,useMemo} from 'react';
import Axios from 'axios';
import './style.css';
import aichi from '../figs/prefs/aichi.png'
import akita from '../figs/prefs/akita.png'
import aomori from '../figs/prefs/aomori.png'
import {Button, Box} from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


/* ページ間遷移用 */
const handleClick_select1 = () => {
    // 同一タブ内で遷移
    window.location.href = "/result";
  };

const handleClick_select2 = () => {
    // 同一タブ内で遷移
    window.location.href = "/";
  };

const SelectPage = () => {
    //const [areaNum, setAreaNum] = useState(0);
    const [areaInfoDictList, setAreaInfoDictList] = useState([]);

    useEffect(() =>{
        try{
            Axios.get("http://127.0.0.1:5000/select")
                .then((res) => {
                    //setAreaNum(res.data.area_num);
                    setAreaInfoDictList(res.data.area_info_dict_list);
                })
        }catch(error){
            console.error(error);
        }   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , []);

    const handleSubmit = (index) => {
        try{
            Axios.get(`http://127.0.0.1:5000/result`);
        }catch(error){
            console.error(error);
        }   
    }

    return (
        <div>
            <div className='Main'>
            <h2 className='title'>どこにする?</h2>
            </div>
            {console.log(areaInfoDictList)}
            <div className='select'>
                    <Button color="default" variant="contained" size='large' onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' backgroundColor: "#ffffff">
                        <table className="place">
                            <tr>
                                <td><img src={aichi} width="200" alt="logo" /></td>
                            </tr>
                            <tr>
                                <tb className="table_font">{areaInfoDictList.length ? areaInfoDictList[0]["middle_class_name"] : ""}<br/>
                                {areaInfoDictList.length ? areaInfoDictList[0]["small_class_name"] : ""}
                                </tb>
                            </tr>
                            
                        </table>
                        
                    </Button>

                    <Button color='default' variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' style={{ margin: "5%",backgroundColor: "#ffffff"}}>
                        <table className="place">
                            <tr>
                                <td><img src={akita}  height="200" alt="logo" /></td>
                            </tr>
                            <tr>
                                <tb className="table_font">{areaInfoDictList.length ? areaInfoDictList[1]["middle_class_name"] : ""}<br/>
                                {areaInfoDictList.length ? areaInfoDictList[1]["small_class_name"] : ""}
                                </tb>
                            </tr>
                        </table>
                    </Button>

                    <Button color="default" variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' backgroundColor: "#ffffff">
                        <table className="place">
                            <tr>
                                <td><img src={aomori}  height="200" alt="logo" /></td>
                            </tr>
                            <tr>
                                <tb className="table_font">{areaInfoDictList.length ? areaInfoDictList[2]["middle_class_name"] : ""}<br/>
                                {areaInfoDictList.length ? areaInfoDictList[2]["small_class_name"] : ""}
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
            <br />
        </div>
    );
    
}
 
export default SelectPage;  
