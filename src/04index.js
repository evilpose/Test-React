import React from 'react';
import ReactDOM from 'react-dom';

let exampleStyle = {
  background: 'Skyblue',
  borderBottom: '1px solid red'
}

let element = (
  <div>
    <h1 style="height:100px" style={exampleStyle}>hello world</h1>
  </div>
)

let classStr = 'redBg'
let element2 = (
  <div>
    <h1 className = {'abc ' + classStr}>hello world</h1>
  </div>
)

let classStr3 = ['abc', 'def'].join(' ')
let element3 = (
  <div>
    <h1 className = {classStr3}>hello world</h1>
  </div>
)

ReactDOM.render(
  element3,
  document.querySelector('#root')
)