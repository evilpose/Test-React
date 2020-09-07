import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props){
    super(props)
    // 状态 （数据） --> view
    // 构造函数初始化数据，尽量将需要改变的数据初始化到state中
    this.state = {
      time:new Date().toLocaleTimeString()
    }
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <h1>当前时间：{this.state.time}</h1>
      </div>
    )
  }

  // 生命周期函数
  componentDidMount(){
    setInterval(() => {
      // 使用this.setState({}) 修改数据会重新渲染数据
      // 小程序就是借鉴的这个
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)