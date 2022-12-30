import React from 'react';
import './style.css';
import logo from '../figs/tizutyan.svg'
import {Button, Box} from '@material-ui/core';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Link } from "react-router-dom";

class topPage extends React.Component {   //topPageクラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div className="App">
                <h1 className="title">Iikanji no Title</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <Box textAlign='center'>
                    <Button color="secondary" variant="contained" size="large" component={Link} to="/select" endIcon={<AddLocationAltIcon />}>
                        旅する!
                    </Button>
                </Box>


            </div>
        );
    }
}
 
export default topPage;  