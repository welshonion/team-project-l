import React from 'react';
import './style.css';
import logo from '../figs/tizutyan.svg'
import { Button} from '@material-ui/core';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

class topPage extends React.Component {   //topPageクラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div className="App">
                <h1 className="title">Iikanji no Title</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <Button color="secondary" variant="contained" size="large" endIcon={<AddLocationAltIcon />}>
                    旅する!
                </Button>

            </div>
        );
    }
}
 
export default topPage;  