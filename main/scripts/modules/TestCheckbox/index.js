/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Checkbox} from 'meditek_react_components'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testCheckboxABCValue: 'YES',
    }
  }

  _onTestCheckboxChange(value, name) {
    console.log("Test: _onTestCheckboxChange:", value, 'name: ', name);
    var newState = {};
    if (name==='testCheckboxABCValue') newState.testCheckboxABCValue = value;
    this.setState(newState);
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <Checkbox
        id = {1234}
        name = "testCheckboxABCValue"
        hide={this.state.hide}
        value={this.state.testCheckboxABCValue}
        trueValue="YES"
        falseValue="NO"
        onChangeValue={this._onTestCheckboxChange.bind(this)}/>
    )
  }
}
export default Test
render(
  <Test />,
  document.getElementById('app')
)
