import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

// The Categories component matches one of two different routes
// depending on the full pathname
class Categories extends Component {
   constructor(props) {
      super(props)
      this.state = {
         party : false,
         abstract : false,
         euro : false
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e) {
      this.setState({[e.target.id] : !this.state[e.target.id]})
   }

   render() {
      return (
        <div className="App-bodywrapper">
           <div className="subpage-main">
               <p>Choose the categories you're interested in.</p>
               <div className="category-container">
                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'party'}
                     style={{backgroundColor: this.state.party ? '#03CEA4' : '', borderRadius : '25px'}}>
                     party
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'abstract'}
                     style={{backgroundColor: this.state.abstract ? '#E40066' : '', borderRadius : '25px'}}>
                     abstract/dex
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'euro'}
                     style={{backgroundColor: this.state.euro ? '#FB4D3D' : '', borderRadius : '25px'}}>
                     euro/war
                  </button>
               </div>
           </div>
           <div className="subpage-footer">
               <Link to="/blacklist"><button onClick={this.clickHandler}>back</button></Link>
               <Link to="/filters"><button onClick={this.clickHandler}>next</button></Link>
           </div>
        </div>
      )
   }
}


export default Categories
