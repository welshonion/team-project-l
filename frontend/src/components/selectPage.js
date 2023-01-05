import React from 'react';
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
                                    <td><img src={aichi} width="200" alt="logo" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">愛知県  <br/>
                                        ○○市・××市・△△市
                                    </tb>
                                </tr>
                                
                            </table>
                            
                        </Button>
                        

                        <Button color='default' variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' style={{ margin: "5%"}}>
                            <table className="place">
                                <tr>
                                    <td><img src={akita}  height="200" alt="logo" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">秋田県  <br/>
                                    ○○市・××市・△△市
                                    </tb>
                                </tr>
                            </table>
                        </Button>

                        <Button color="default" variant="contained" size="large" onClick={handleClick_select1} component={Link} to="/result" className='figsize_select' >
                            <table className="place">
                                <tr>
                                    <td><img src={aomori}  height="200" alt="logo" /></td>
                                </tr>
                                <tr>
                                    <tb className="table_font">青森県  <br/>
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
