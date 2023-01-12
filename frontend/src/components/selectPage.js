import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import './style.css';
import {Button, Box} from '@material-ui/core';
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import ImgPrefs from './ImgPrefs';

/* ページ間遷移用 */
// const handleClick_select1 = () => {
//     // 同一タブ内で遷移
//     window.location.href = "/result";
//   };

// const handleClick_select2 = () => {
//     // 同一タブ内で遷移
//     window.location.href = "/";
//   };

const SelectPage = () => {
    // const [areaNum, setAreaNum] = useState(0);
    const [areaInfoDictList, setAreaInfoDictList] = useState([]);

    useEffect(() =>{
        Axios.get("http://127.0.0.1:5000/select")
            .then((res) => {
                // setAreaNum(res.data.area_num);
                setAreaInfoDictList(res.data.area_info_dict_list);
            })
            .catch((error) => {
                console.error(error);
            })   
    } , []);

    return (
        <div>
            <div className='Main'>
            <h2 className='title'>どこにする?</h2>
            </div>
            <div className='select'>
                    <Button color="default" variant="contained" size='large' component={Link} /*onClick={handleClick_select1}}*/ to="/result" state ={{areaInfoDict: areaInfoDictList.length ? areaInfoDictList[0] : null}} className='figsize_select' >
                        <table className="place">
                            <tbody>
                                <tr>
                                    <td><ImgPrefs prefs={areaInfoDictList.length ? areaInfoDictList[0]["middle_class_name"]:""} width="200"/></td>
                                </tr>
                                <tr>
                                    <td className="table_font">{areaInfoDictList.length ? areaInfoDictList[0]["middle_class_name"] : ""}<br/>
                                    {areaInfoDictList.length ? areaInfoDictList[0]["small_class_name"] : ""}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </Button>

                    <Button color='default' variant="contained" size="large" component={Link} /*onClick={handleClick_select1}}*/ to="/result" state ={{areaInfoDict: areaInfoDictList.length ? areaInfoDictList[1] : null}} className='figsize_select' style={{ margin: "5%"}}>
                        <table className="place">
                            <tbody>
                                <tr>
                                    <td><ImgPrefs prefs={areaInfoDictList.length ? areaInfoDictList[1]["middle_class_name"]:""} width="200"/></td>
                                </tr>
                                <tr>
                                    <td className="table_font">{areaInfoDictList.length ? areaInfoDictList[1]["middle_class_name"] : ""}<br/>
                                    {areaInfoDictList.length ? areaInfoDictList[1]["small_class_name"] : ""}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Button>

                    <Button color="default" variant="contained" size="large" component={Link} /*onClick={handleClick_select1}}*/ to="/result" state ={{areaInfoDict: areaInfoDictList.length ? areaInfoDictList[2] : null}} className='figsize_select' >
                        <table className="place">
                            <tbody>
                                <tr>
                                    <td><ImgPrefs prefs={areaInfoDictList.length ? areaInfoDictList[2]["middle_class_name"]:""} width="200"/></td>
                                </tr>
                                <tr>
                                    <td className="table_font">{areaInfoDictList.length ? areaInfoDictList[2]["middle_class_name"] : ""}<br/>
                                    {areaInfoDictList.length ? areaInfoDictList[2]["small_class_name"] : ""}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Button>

            </div>
            
            <h1>
            <div className='return_to_top'>
                <Box textAlign='center'>
                    <Button color="secondary" variant="contained" size="large" component={Link} /*onClick={handleClick_select2}}*/ to="/" endIcon={<ArrowBackIosIcon />}>
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
