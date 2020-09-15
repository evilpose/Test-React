import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';

// 子传父
class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      children: null
    }
  }
  setData = (data) => {
    this.setState({
      children: data
    })
  }
  render(){
    return (
      <div>
        <h1>子元素传递给父元素的数据：{this.state.children}</h1>
        <ChildCom setChildData = {this.setData}/>
      </div>
    )
  }
}

class ChildCom extends Component{
  constructor(props){
    super(props)
    this.state = {
      msg: 'helloworld'
    }
  }
  render(){
    return(
      <div>
        <button onClick={this.sendData}>传递helloworld给父元素</button>
        <button onClick={()=>{this.props.setChildData(this.state.msg)}}>传递helloworld给父元素</button>
      </div>
    )
  }
  sendData = () => {
    // 将子元素传递到父元素，实际就是调用父元素传递进来的父元素函数
    this.props.setChildData(this.state.msg)
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)