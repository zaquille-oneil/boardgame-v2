import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

// The Categories component matches one of two different routes
// depending on the full pathname


class Categories extends Component {
   constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e) {
      var x = Object.assign({}, this.props.categories, {[e.target.id] : !this.props.categories[e.target.id]})
      this.props.changeParent('categories', x)
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
                     style={{backgroundColor: this.props.categories.party ? '#03CEA4' : '', borderRadius : '25px'}}>
                     party/family/children
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'abstract'}
                     style={{backgroundColor: this.props.categories.abstract ? '#E40066' : '', borderRadius : '25px'}}>
                     abstract/thematic/
                     customizable
                  </button>

                  <button className="category-box"
                     onClick={this.handleClick}
                     id={'euro'}
                     style={{backgroundColor: this.props.categories.euro ? '#FB4D3D' : '', borderRadius : '25px'}}>
                     strategy/war
                  </button>
               </div>
           </div>
           <div className="subpage-pad" style={{height:'40px', width:'1px'}}/>
           <div className="subpage-footer">
               <Link to="/blacklist"><button onClick={this.clickHandler}>back</button></Link>
               <Link to="/filters"><button onClick={this.clickHandler}>next</button></Link>
           </div>
        </div>
      )
   }
}


export default Categories
