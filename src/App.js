import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      {/* 
      <Route path="/" component={Home}></Route>
      <Route path="/about"  component={About}></Route> 
      이렇게 되면 about에도 / 가 있으니까 about 페이지에서는 2개 다 렌더링 된다. 
      <Route path="/" exact={true} component={Home}>asdgs</Route>
      exact={true} 를 넣어줘서 path가 정확히 '/' <- 이거 하나일 때만 home을 렌더링 해주게 할 수 있다.
      */}
      <Route path="/home">
        <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
