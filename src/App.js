import React from "react";
import PropTypes from "prop-types";

/**
 * class component는 return이 없다 (function이 아니니까)
 * class component는 render method를 가지고 있고 나의 app component안에 있다. 왜냐면 내가 react component에서 확장했기 때문
 *
 *
 * function component는 function이고 뭔가를 return하고 screen에 표시된다.
 * class component는 class이고 react component로 부터 확장되고 screen에 표시된다.
 *
 * react는 자동적으로 class component의 render method를 실행한다.
 */
class App extends React.Component {
  state = {
    // object
    // component의 data를 넣을 공간이 있고 이 데이터는 변한다.
    count: 0,
  };
  add = () => {
    console.log("add");
  };
  miuns = () => {
    console.log("minus");
  };
  render() {
    return (
      <>
        <h1>Im a class component : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.miuns}>Minus</button>
      </>
    );
  }
}

export default App;
