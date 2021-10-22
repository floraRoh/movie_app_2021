import React from "react";
// import { HashRouter, Route } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import MovieDetail from "./routes/MovieDetail";
import Footer from './components/Footer';
import TopBtn from "./components/TopBtn";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home}></Route>
      <Route path="/movie/:id" component={MovieDetail}></Route>
      <Footer />
      <TopBtn />
    </BrowserRouter>
  );
}

export default App;
