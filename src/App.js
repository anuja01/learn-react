import React from 'react';

const FunctonalComponent = (props) => {
  return (
    <div>Functional component content : {props.myNname}</div>
  )
}
class ClassComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 1, number: 1 }
  }
  componentDidMount() {
    this.updateStateIncorrect()
    this.updateStateCorrect()
  }
  /**
   * correct and wrong way to set state is illustrated
   * since setState is asynchronous need a callback to access immediately
   */
  //wrong way
  updateStateIncorrect = () => {
    this.setState({ counter: this.state.counter + this.state.number })
    console.log(`answer is : ${this.state.counter} and it's wrong`)
  }

  //correct way
  updateStateCorrect = () => {
    this.setState((state, props) => ({
      counter: state.counter + state.number
    }),()=>{console.log(`Answer is correct with callback :) ${this.state.counter} `)});
  }

  
  render() {
    return (
      <div>
        <h3>Class component header</h3>
        <p>Class component content, and below is the clock</p>
      </div>
    )
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props)
    // adding local state to calss
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({ date: new Date() })
  }
  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }

}
function App() {

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <FunctonalComponent myNname="Anuja" />
      <ClassComponent />
      <Clock />
    </div>
  );
}
export default App;
