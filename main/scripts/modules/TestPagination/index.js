/**
 * Created by tannguyen on 11/08/2016.
 */
//https://www.npmjs.com/package/react-js-pagination
import {render} from 'react-dom'
import React, {Component, PropTypes} from 'react'
import {Pagination} from 'meditek_react_components'
class Test extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      activePage: 4,
      totalItemsCount: 450
    }
  }

  _onTestPaginationChange(value) {
    console.log("TestPagination:_onTestPaginationChange:", value)
    this.setState({
      activePage:value
    })
  }

  componentDidMount() {
    var self = this;
  }

  render() {
    return (
      <Pagination
        activePage={this.state.activePage}
        totalItemsCount={this.state.totalItemsCount}
        itemsCountPerPage = {5}
        pageRangeDisplayed = {10}
        onChangeValue={this._onTestPaginationChange.bind(this)}/>
    )
  }
}

export default Test

render(
  <Test />,
  document.getElementById('app')
)
