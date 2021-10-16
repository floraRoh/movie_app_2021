import React from "react";
import { Link } from "react-router-dom";

function Navigator() {
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* 
        Link의 to는 App.js의 path의 값과 같아야 한다.
      */}
    </div>
  )
}

export default Navigator;