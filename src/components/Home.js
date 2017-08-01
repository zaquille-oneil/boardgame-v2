import '../App.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
   constructor(props) {
      super(props)
      props.refresh()
   }

   render() {
      return (
         <div className="App-bodywrapper">
            <Link to="/blacklist">
               <button
                  onClick={this.clickHandler}
                  style={{width:'6em',height:'3em', borderRadius: '20px', fontSize: '3em', marginBottom: '25%'}}>
                  start
               </button>
            </Link>
         </div>
      )
   }
}

export default Home
