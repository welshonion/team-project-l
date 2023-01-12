import React from 'react'; //Reactを読み込んでいる
//画面遷移で使用する{ BrowserRouter, Route, Switch }を'react-router-dom'から読み込んでいる
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// ページの読み込み
import TopPage from './components/topPage';
import SelectPage from './components/selectPage';
import ResultPage from './components/resultPage';
import Map from './components/Map';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/select" element={<SelectPage />} />;
          <Route path="/result" element={<ResultPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    );
  };
}

export default App;
