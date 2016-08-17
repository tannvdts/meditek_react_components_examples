/**
 * Created by tannguyen on 17/08/2016.
 */
/**
 * Created by tannguyen on 01/08/2016.
 */
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import TestCheckbox from '../TestCheckbox'
import TestCheckboxGroup from "../TestCheckboxGroup"
import TestDatePicker from "../TestDatePicker"
import TestFile from "../TestFile"
import TestInputText from "../TestInputText"
import TestModal from "../TestModal"
import TestPagination from "../TestPagination"
import TestRadioGroup from "../TestRadioGroup"
import TestSelect from "../TestSelect"
import TestTextarea from "../TestTextarea"
import TestTimePicker from "../TestTimePicker"

class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{marginLeft: "50px"}}>
                <h2>Demo meditek_react_components</h2>
                <h4>Document: <a href="https://github.com/tannvdts/meditek_react_components" target="_blank">https://github.com/tannvdts/meditek_react_components</a></h4>
                <h4>Source Demo: <a href="https://github.com/tannvdts/meditek_react_components_examples" target="_blank">https://github.com/tannvdts/meditek_react_components_examples</a></h4>

                <div>
                    <p>Install: npm install meditek_react_component --save </p>
                    <p>
                    {"Install dependency:"}<br/>
                    {" npm install react-checkbox-group --save"}<br/>
                    {" npm install pagination --save"}<br/>
                    {" npm install react-js-pagination --save"}<br/>
                    {" npm install react-radio-group --save"}<br/>
                        <br/>
                    {"bootstrap 3: http://getbootstrap.com/"}<br/>
                    {"bootrap-datepicker: https://bootstrap-datepicker.readthedocs.io/en/latest/"}<br/>
                    {"bootstrap-timepicker: https://jdewit.github.io/bootstrap-timepicker/"}<br/>


                    </p>
                </div>
                <hr/>
                <hr/>

                {"Test Checkbox:"}
                <br/>
                <TestCheckbox/>
                <br/>
                {"Test CheckboxGroup:"}
                <TestCheckboxGroup/>
                <hr/>
                {"Test DatePicker:"}
                <TestDatePicker/>
                <hr/>
                {"Test File:"}
                <TestFile/>
                <hr/>
                {"Test InputText:"}
                <TestInputText/>
                <hr/>
                {"Test Modal:"}
                <TestModal/>
                <hr/>
                {"Test Pagination:"}
                <TestPagination/>
                <hr/>
                {"Test RadioGroup:"}
                <TestRadioGroup/>
                <hr/>
                {"Test Select:"}
                <TestSelect/>
                <hr/>
                {"Test Textarea:"}
                <TestTextarea/>
                <hr/>
                {"Test TimePicker:"}
                <TestTimePicker/>
                <hr/>
            </div>
        )
    }
}

render(
    <Test />,
    document.getElementById('app')
)
