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
    /**
     * state == object
     * component의 data를 넣을 공간이 있고 이 데이터는 변한다.
     *  
     * setState를 사용하지 않으면 새 state와 함께 render function이 호출되지 않음
     * 
     * 매 순간 set state를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출한다. 
     * */ 
    count: 0,
  };
  add = () => {
    this.setState({ count: current.count + 1 });
    /**
     * this.state.count는 외부에 의존적이어서 권장하지 않음. 대신 current를 사용하는 게 좋다
     */
  };
  miuns = () => {
    this.setState({ count: this.state.count - 1 });
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
