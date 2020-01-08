import React from 'react';

const FunctonalComponent = (props) => {
  return (
    <div>Functional component content : {props.myNname}</div>
  )
}
class ClassComponent extends React.Component {
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
    this.state = { date: new Date() };
  }
  render() {
    setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
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
