import React from 'react';
import './style.css';

class selectPage extends React.Component {   //selectPageクラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <h2 className='h2'>・どこにする?</h2>
            </div>
        );
    }
}
 
export default selectPage;  