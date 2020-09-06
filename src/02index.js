import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
//上面这句话的意思是 如果你有内容需要缓存，就会直接缓存

// function clock(){
//   let time = new Date().toLocaleTimeString()
//   let element = (
    // <div>
    //   <h1>现在的时间是{time}</h1>
    //   <h2>FU BIAO TI</h2>
    // </div>
//   )

//   ReactDOM.render(element, document.querySelector('#root'))
// }

// clock()

// setInterval(() => {
//   clock()
// }, 1000);

// react 函数式组件
function Clock(props) {
  return (
    <div>
      <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
      <h2>FU BIAO TI</h2>
    </div>
  )
}

function run() {
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.querySelector('#root')
  )
}

setInterval(() => {
  run()
}, 1000);