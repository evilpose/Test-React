import React from 'react';
import ReactDOM from 'react-dom';
import './01props.css'

// 在父元素中使用 state 去控制子元素 props 的从而达到父元素数据传递给子元素

class ParentCom extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isActive: true
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.changShow.bind(this)}>控制子元素显示</button>
        <ChildCom isActive={this.state.isActive}/>
      </div>
    )
  }

  changShow(){
    this.setState({
      isActive: !this.state.isActive
    })
  }
}

class ChildCom extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let StrClass = null
    if (this.props.isActive){
      StrClass = ' active'
    } else{
      StrClass = ''
    }

    return(
      <div className={'content' + StrClass}>
        <h1>我是子元素</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <ParentCom />,
  document.querySelector('#root')
)