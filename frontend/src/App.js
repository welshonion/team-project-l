import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ページの読み込み
import topPage from './pages/topPage';
import selectPage from './pages/selectPage';
import resultPage from './pages/resultPage';
 
 
class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={topPage} />
          <Route exact path="/select" component={selectPage} />
          <Route exact path="/result" component={resultPage} />
        </Switch>
      </BrowserRouter>
    );
  };
}
 
export default App;
