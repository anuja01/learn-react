import React, { Component } from 'react';
// with arrow functions
const eventHandler = (event, param, param2) => {
  console.log(event)
  console.log(param)
  console.log(param2)
}

function eventHandler2(event, param, param2) {
  console.log(event)
  console.log('param1', param)
  console.log('param2', param2)
}

class ComponentForBind extends Component {
  constructor(props) {
    super(props)
    this.state = { text: 'lorum ipsum' }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  // if regulr function, then need to bind - scope depends on the context
  handleOnClick() {
    console.log(this.state.text)
  }

  // if arrow function, no need to bind - by defaluld in lexical scope
  handleOnClick2 = (e, time, text) => {
    console.log('state text: ', this.state.text)
    console.log('passed text: ', text)
    console.log(time)
    console.log(e)
    this.setState({ text: text }, () => { console.log('state text: ', this.state.text) })
  }

  render() {
    return (
      <>
        <button onClick={this.handleOnClick}>I am from Class</button>
        <button onClick={(e) => this.handleOnClick2(e, new Date(), 'lorem')}>I am from Class 2</button>
      </>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { isUser: false, userName: 'Anuja' }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isUser: !this.state.isUser })}>{this.state.isUser ? 'Logout' : 'Login'}</button>
        <div>Welcome {this.state.isUser ? this.state.userName : 'Guest'}</div>
      </div>)
  }

}

function App() {
  const param = 'blah'
  const param2 = 'blah blah'
  return (
    <div>
      <button onClick={(e) => eventHandler(e, param, param2)}>Click me to trigger event!!</button>
      <button onClick={(e) => eventHandler2(e, param, param2)}>Click me to trigger event!!</button>
      <ComponentForBind />
      <Login />
    </div>
  );
}

export default App;
