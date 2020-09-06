import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// let time = new Date().toLocaleTimeString()
// let str = '当前的时间是：'
// let Element = (
//   <div>
//     <h1>hello world</h1>
//     <h2>{1 + 1}</h2>
//     <h3>{str + time}</h3>
//   </div>
// )

// let man = '发烧'
// let Element2 = (
//   <div>
//     <h1>今天是否隔离</h1>
//     <h2>{man === '发烧'? <button>隔离</button> : '不用隔离'}</h2>
//   </div>
// )

// let man = '正常'
// let Element4 = (
//   <div>
//     <span>横着躺</span>
//     <span>竖着躺</span>
//   </div>
// )
// let Element3 = (
//   <div>
//     <h1>今天是否隔离</h1>
//     <h2>{man === '发烧'? <button>隔离</button> : Element4}</h2>
//   </div>
// )

let color = 'bgRed'
let logo = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
// HTML的样式类名要写 className 因为class的js中是关键词
let Element5 = (
  <div>
    <img src={logo}></img>
    <br></br>
    <span className={color}>红色的背景颜色</span>
  </div>
)

ReactDOM.render(
  Element5,
  document.getElementById('root')
)