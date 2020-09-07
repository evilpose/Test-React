import React from 'react';
import ReactDOM from 'react-dom';
import './Tab.css'

class Tab extends React.Component{
  constructor(props){
    super(props)

    // 设置状态
    this.state = {
      c1: 'content active',
      c2: 'content'
    }
  }

  clickEvent(e) {
    console.log(e.target.dataset.index)
    if (e.target.dataset.index === '1') {
      this.setState({
        c1: 'content active',
        c2: 'content',
      })
    } else {
      this.setState({
        c1: 'content',
        c2: 'content active',
      })
    }
  }

  render(){
    return (
      <div>
        <button data-index='1' onClick={this.clickEvent.bind(this)}>内容一</button>
        <button data-index='2' onClick={this.clickEvent.bind(this)}>内容二</button>
        <div className = {this.state.c1}>
          <h1>内容一</h1>
        </div>
        <div className = {this.state.c2}>
          <h1>内容二</h1>
        </div>
      </div>
    )
  }
} 

ReactDOM.render(
  <Tab />,
  document.querySelector('#root')
)