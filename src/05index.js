import React from 'react';
import ReactDOM from 'react-dom';

// 函数式组件
// 一般是用来写不用交互的，静态的
function Childcom(props) {
  console.log(props)
  let title = <h1>我是副标题</h1>
  let weather = props.weather
  let isGo = weather === '下雨' ? '不出门' : '出门'
  return (
    <div>
      <h1>函数式组件</h1>
      {title}
      <div>
        是否出门？
        <span>{isGo}</span>
      </div>
    </div>
  )
}

// 类组件定义
class HelloWorld extends React.Component{
  render(){
    return (
      <div>
        <Childcom weather='出太阳'/>
        <h1>类组件定义{this.props.name}</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloWorld name='钢铁侠'/>,
  document.querySelector('#root')
)