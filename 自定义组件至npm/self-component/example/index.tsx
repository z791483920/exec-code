import * as React from "react";
import * as ReactDOM from "react-dom";
import MyComponent from "../src/index";

const App = () => {
  let b = say();
  return (
    <div>
      <MyComponent firstName='1' lastName='2' />
    </div>
  );
};


async function say(){
  console.log('a')
  let a = await Promise.resolve('1');
  return a;
}

ReactDOM.render(<App />, document.getElementById("root"));