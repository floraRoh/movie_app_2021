import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigator() {
  return (
    <div className="Navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to={{
        pathname: "/about",
        state : {
          fromNavigation: true
        }
      }}>About</Link>  => 이런 식으로 props 보낼 수도 있다
      
      */}
      {/* 
        Link의 to는 App.js의 path의 값과 같아야 한다.
      */}
    </div>
  );
}

export default Navigator;
