import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    /**
     * 문. 처음에 render하면 호출되는 life cycle method는 ?
     * 답. componentDidMount
     */
    const { isLoading } = this.state;
    return (
      <>
        <div>{isLoading ? "Loading..." : "we are Ready"}</div>
      </>
    );
  }
}

export default App;
