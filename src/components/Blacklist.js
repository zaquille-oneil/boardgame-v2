import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const FLAVOURS = require('../bgdata.json')
// [
// 	{ label: 'Chocolate', value: 'chocolate' },
// 	{ label: 'Vanilla', value: 'vanilla' },
// 	{ label: 'Strawberry', value: 'strawberry' },
// 	{ label: 'Caramel', value: 'caramel' },
// 	{ label: 'Cookies and Cream', value: 'cookiescream' },
// 	{ label: 'Peppermint', value: 'peppermint' },
// ];

// The Blacklist component matches one of two different routes
// depending on the full pathname

class Blacklist extends Component {

   constructor(props) {
      super(props)
      this.state = {
			options: FLAVOURS,
			value: []
      }
      this.handleSelectChange = this.handleSelectChange.bind(this)
   }

   handleSelectChange(newValue) {
      this.setState({ value : newValue});
      console.log(this.state.value)
   }

   render() {
      return (
        <div className="App-bodywrapper">
            <div className="subpage-main">
               <p>List out some boardgames that you've played before.</p>
               <Select
                  style={{maxWidth: '280px', minWidth: '150px'}}
                  multi
                  simpleValue
                  value={this.state.value}
                  placeholder="Catan..."
                  options={this.state.options}
                  onChange={this.handleSelectChange} />
            </div>
            <div className="subpage-footer">
               <Link to="/"><button onClick={this.clickHandler}>home</button></Link>
               <Link to="/categories"><button onClick={this.clickHandler}>next</button></Link>
            </div>
        </div>
      )
   }
}

export default Blacklist
