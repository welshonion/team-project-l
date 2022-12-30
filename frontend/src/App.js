import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ページの読み込み
import topPage from './components/topPage';
import selectPage from './components/selectPage';
import resultPage from './components/resultPage';
import Map from './components/Map';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={topPage} />
          <Route exact path="/select" component={selectPage} />
          <Route exact path="/result" component={resultPage} />
          <Route exact path="/map" component={Map} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
