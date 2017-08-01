import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// The Filters component matches one of two different routes
// depending on the full pathname
var options = {
   rating : [
      {label : '7 stars', value : 7},
      {label : '7.3 stars', value : 7.3},
      {label : '7.5+ stars', value : 7.5},
   ],
   duration : [
      {label : 'very short', value : 10},
      {label : 'short', value : 20},
      {label : 'medium', value : 40},
      {label : 'long', value : 70},
      {label : 'very long', value : 150}
   ],
   // ageGroup : [
   //    {label : '1-5', value : 5},
   //    {label : '5-10', value : 10},
   //    {label : '11-20', value : 20},
   //    {label : '21+', value : 99}
   // ],
   playerLimit : [
      {label : '1', value : 1},
      {label : '2', value : 2},
      {label : '3', value : 3},
      {label : '4', value : 4},
      {label : '5', value : 5},
      {label : '6', value : 6},
      {label : '7', value : 7},
      {label : '8+', value : 8}
   ],
   weight : [
      {label: 'simple', value: 1},
      {label: 'interesting', value: 2.5},
      {label: 'complex', value: 4}
   ]
}

class Filters extends Component {
   constructor(props) {
      super(props)
      this.updateRating = this.updateRating.bind(this)
      //this.updateAgeGroup = this.updateAgeGroup.bind(this)
      this.updateDuration = this.updateDuration.bind(this)
      this.updatePlayerLimit = this.updatePlayerLimit.bind(this)
      this.updateWeight = this.updateWeight.bind(this)
   }

   updateRating(newValue) {
      var x = Object.assign({}, this.props.filters, {'rating': newValue})
      this.props.changeParent('filters', x)
   }

   // updateAgeGroup(newValue) {
   //    var x = Object.assign({}, this.props.filters, {'ageGroup': newValue})
   //    this.props.changeParent('filters', x)
   // }

   updateDuration(newValue) {
      var x = Object.assign({}, this.props.filters, {'duration': newValue})
      this.props.changeParent('filters', x)
   }

   updatePlayerLimit(newValue) {
      var x = Object.assign({}, this.props.filters, {'playerLimit': newValue})
      this.props.changeParent('filters', x)
   }

   updateWeight(newValue) {
      var x = Object.assign({}, this.props.filters, {'weight': newValue})
      this.props.changeParent('filters', x)
   }

   render() {
      return (
         <div className="App-bodywrapper">
            <div className="subpage-main">
               <p>Anything else specific?</p>
            <div style={{display:'flex',flexDirection: 'row', justifyContent: 'center', width: 'inherit'}}>
               <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='rating'
                  options={options.rating}
                  simpleValue
                  value={this.props.filters.rating}
                  onChange={this.updateRating}
                  autosize={false}
               />
               <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='length'
                  options={options.duration}
                  simpleValue
                  value={this.props.filters.duration}
                  onChange={this.updateDuration}
                  autosize={false}
               />
               {/* <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='age'
                  options={options.ageGroup}
                  simpleValue
                  value={this.props.filters.ageGroup}
                  onChange={this.updateAgeGroup}
                  autosize={false}
               /> */}
            </div>
            <div style={{marginTop: '10px', display:'flex',flexDirection: 'row', justifyContent: 'center', width: 'inherit'}}>
               <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='players'
                  options={options.playerLimit}
                  simpleValue
                  value={this.props.filters.playerLimit}
                  onChange={this.updatePlayerLimit}
                  autosize={false}
               />
               <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='weight'
                  options={options.weight}
                  simpleValue
                  value={this.props.filters.weight}
                  onChange={this.updateWeight}
                  autosize={false}
               />
            </div>
         </div>
            <div className="subpage-footer">
               <Link to="/categories"><button onClick={this.clickHandler}>back</button></Link>
               <Link to="/result"><button onClick={this.clickHandler}>next</button></Link>
            </div>
         </div>
      )
   }
}


export default Filters
