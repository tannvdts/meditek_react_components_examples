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
            <div>
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
