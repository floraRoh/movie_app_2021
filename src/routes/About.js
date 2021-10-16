import React from "react";

function About(props) {
  console.log(props);
  /** 
   * 전송되지 않아도 react-router에 의해 자동으로 넣어지는 4가지  props  (모든 라우터들은 props를 가진다)
   * location, history, match, staticContext 
  */
  return(
    <h1>About this page : because... I think... must have to study!</h1>
  )
}

export default About;