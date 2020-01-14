import React, { Component } from 'react';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', selectValue: '' }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.onSubmitValue = this.onSubmitValue.bind(this)
    this.setSelectValue = this.setSelectValue.bind(this)
  }
  handleOnChange(e) {
    console.log(e.target.value)
    this.setState({ value: e.target.value.toUpperCase() })
  }
  setSelectValue(e){
    console.log(e.target.value)
    this.setState({selectValue: e.target.value})
  }
  onSubmitValue(e) {
    alert(`submitted value: ${this.state.value}, selected fruit: ${this.state.selectValue}`)
    e.preventDefault()
  }

  render() {
    return (
      <>
        {/* controlled from with combined state with react */}
        <form onSubmit={this.onSubmitValue}>
          name: <input type="text" name="name" value={this.state.value} onChange={this.handleOnChange}></input>
          Pick your fruit:
          <select value={this.state.selectValue} onChange={this.setSelectValue}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" name="submit"></input>
        </form >
      </>
    )
  }
}

function App() {
  const numberList = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* uncontrolled from with its own state */}
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <ControlledForm />

      {numberList.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </div>
  );
}

export default App;
