import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// The Filters component matches one of two different routes
// depending on the full pathname
var options = {
   rating : [{label : '5 stars', value : 5}],
   duration : [{label : '1-2 hours', value : 5}],
   ageGroup : [{label : '5-10 years', value : 1}],
   playerLimit : [{label : '1-2 players', value : 1}]
}

class Filters extends Component {
   constructor(props) {
      super(props)
      this.state = {
         rating : 'rating',
         duration : 'duration',
         ageGroup : 'ageGroup',
         playerLimit: 'playerLimit'
      }
      this.updateRating = this.updateRating.bind(this)
      this.updateAgeGroup = this.updateAgeGroup.bind(this)
      this.updateDuration = this.updateDuration.bind(this)
      this.updatePlayerLimit = this.updatePlayerLimit.bind(this)
   }

   updateRating(newValue) {
      this.setState({rating : newValue})
   }

   updateAgeGroup(newValue) {
      this.setState({ageGroup : newValue})
   }

   updateDuration(newValue) {
      this.setState({duration : newValue})
   }

   updatePlayerLimit(newValue) {
      this.setState({playerLimit : newValue})
   }


   render() {
      return (
         <div className="App-bodywrapper">
            <div className="subpage-main">
               <p>Anything else specific?</p>
            <div style={{display:'flex',flexDirection: 'row', justifyContent: 'center', width: 'inherit'}}>
               <Select
                  style={{maxWidth : '200px',textAlign:'left', marginRight: '10px'}}
                  placeholder='rating'
                  options={options.rating}
                  simpleValue
                  value={this.state.rating}
                  onChange={this.updateRating}
                  autosize={false}
               />
               <Select
                  style={{maxWidth : '200px',textAlign:'left'}}
                  placeholder='length'
                  options={options.duration}
                  simpleValue
                  value={this.state.duration}
                  onChange={this.updateDuration}
                  autosize={false}
               />
               <Select
                  style={{maxWidth : '200px',textAlign:'left', marginLeft: '10px'}}
                  placeholder='age'
                  options={options.ageGroup}
                  simpleValue
                  value={this.state.ageGroup}
                  onChange={this.updateAgeGroup}
                  autosize={false}
               />
               <Select
                  style={{maxWidth : '200px',textAlign:'left', marginLeft: '10px'}}
                  placeholder='players'
                  options={options.playerLimit}
                  simpleValue
                  value={this.state.playerLimit}
                  onChange={this.updatePlayerLimit}
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
