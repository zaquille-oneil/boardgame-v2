import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

// The Categories component matches one of two different routes
// depending on the full pathname

// Abstract Strategy Games (like Chess or Go)		0.0%	0
// Customizable Games (CCGs, CMGs, LCGs, etc)		0.0%	0
// Thematic Games (emphasis on narrative)		54.1%	112
// Family Games (fun for kids and adults)		2.9%	6
// Children's Games (best for younger kids)		3.4%	7
// Party Games (few rules, lots of laughs)		0.5%	1
// Strategy Games (more complex games)		39.1%	81
// Wargames (conflict simulation, etc.)

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
                     party/family/children
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'abstract'}
                     style={{backgroundColor: this.state.abstract ? '#E40066' : '', borderRadius : '25px'}}>
                     abstract/thematic/
                     customizable
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'euro'}
                     style={{backgroundColor: this.state.euro ? '#FB4D3D' : '', borderRadius : '25px'}}>
                     strategy/war
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
