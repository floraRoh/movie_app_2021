import React from "react";

// function Food(props) {
function Food({fav}) { // props object 내부에 fav가 있다
  // console.log(props);
  // console.log(props.fav);
  console.log(fav);
  return <h3>I love {fav}</h3>;
}

function App() {
  return (
    <>
      <div className="App">Hello!!!</div>
      <Food fav="kimchi" somethig={true} papap={["hello", 1, 2, 3, 4, true]} />
      <Food fav="ramen " />
      <Food fav="water" />
      <Food fav="bread" />

    </>
  );
}

export default App;
