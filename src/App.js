import React from "react";
import { HashRouter, Route } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
/**
 * BrowserRouter 과 HashRouter 차이
 * - HashRouter는 주소창에 /#/ 나옴
 * - BrowserRouter는 github pages를 사용할 때 어려운게 있다고 한다. 찾아보기 
 */
function App() {
  return (
    <HashRouter>
      {/* 
        1. router 밖에서는 link를 쓸 수 없다
        ==> HashRouter tag 밖에 Navigation tag를 놓으면 작동 X
      */}
      <Navigation />
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
    </HashRouter>
  );
}

export default App;
