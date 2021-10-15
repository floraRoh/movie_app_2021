import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  miuns = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }; // current 부분 잘 볼 것 !! 
  
  constructor(props) {
    super(props);
    console.log('hello');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount'); 
    // 이건 preserve log 체크해도 console.log 확인 안됨
  }
  render() {
    /**
     * react component에서 유일한 function은 render function이다. react class component는 단순히 render말고 더 많은걸 가지고 있다.
     *  이들은 life cycle method를 가지는데, 이는 기본적으로 react가 compnent를 생성하는 & 없애는 방법이다. component가 생성 될 때, render 전에 호출되는 몇 가지 function이 있다.
     * 
     * 1. Mounting 
     * = component be born 
     * 
     * [호출순서]
     * 1-1.먼저 호출되는 게 constructor (constructor는 react에서 오지않았다. constructor는 javascript에서 class를 만들 때 호출되는거야 )
     * 1-2. static getDerivedStateFromProps ()
     * 1-3. render()
     * 1-4. componentDidMount()
     * 
     * 2. Updating
     * 
     * [호출순서]
     * 2-1. static getDerivedStateFromProps()
     * 2-2. shouldComponentUpdate() 
     * == 기본적으로 업데이트를 할지 말지 결정하는 거
     * 2-3. render()
     * 2-4. getSnapshotBeforeUpdate()
     * 2-5. componentDidUpdate()
     * 
     * componentWillUpdate랑 componentWillReceiveProps는 전에 사용했지만 잘 사용하지 않아 멀리 떠나감. 이제는 없다.
     * 
     * setState를 호출하면 component를 호출하고 render를 호출한 다음 업데이트가 완료되었다고 말하면 componentDidUpdate가 실행된다.
     * 
     * 3. Unmounting 
     * = component die (페이지 바꿀 때 component는 죽지 || state를 사용해서 compoent를 교체할 때 죽기도 하고)
     * 3-1. componentWillUnmount()
     * = component가 죽을 때 !
     */
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
