/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {DatePicker} from 'meditek_react_components'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      testDatePickerValue: null,
    }
  }

  _onTestDatePickerChange(value, name) {
    console.log("_onTestDatePickerChange:", value, name);
    var newState = {};
    if(name ==='myDate') newState.testDatePickerValue = value;
    this.setState(newState);
  }

  componentWillMount() {
    this.datePickerOptions= {
      orientation: "left",
      format:'dd/mm/yyyy',
      autoclose: !0,
      clearBtn: true
    }
  }

  componentDidMount() {
    var self = this;
    var selectedDate = moment().format("DD/MM/YYYY");
    // Mo phong bat dong bo
    //----------------------------------
    self.setState({
      testDatePickerValue:selectedDate
    })
    /*setTimeout(function(selectedDate){
      if(self.isMounted()) {
        console.log(">>>>>>>>>>>>>>")
        self.setState({
          testDatePickerValue:selectedDate
        })
      }

    }, 1000, selectedDate)*/
  }

  render() {
    return (
      <DatePicker datePickerOptions={this.datePickerOptions}
                   id = {1234}
                   name = {'myDate'}
                   hide={this.state.hide}
                   onChangeValue={this._onTestDatePickerChange.bind(this)}
                   className='form-control'
                   value = {this.state.testDatePickerValue}
      />
    )
  }
}

export default Test

render(
  <Test />,
  document.getElementById('app')
)
