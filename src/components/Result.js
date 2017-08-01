import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
const FLAVOURS = require('../bgdata.json')

//abstracts familygames strategygames cgs thematic partygames wargames
var abstr = '';
for (var i = 0; i < FLAVOURS.length; ++i) {
   if (FLAVOURS[i].category[1]) {
      for (var j = 0; j < FLAVOURS[i].category.length; ++j){
         if (FLAVOURS[i].category[j] === 'abstracts') {
               abstr += FLAVOURS[i].label + ', '
               break;
            }
      }
   }
}

// The Result component matches one of two different routes
// depending on the full pathname
const Result = () => (
   <div className="App-bodywrapper">
      <div className="subpage-main">
         <button>Generate</button>
         <p>{abstr}</p>
         <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{margin: '5px', width: '250px',height:'250px', backgroundColor:'white', color:'black'}}>img placeholder</div>
            <div style={{margin: '5px', width: '250px',height:'250px', backgroundColor:'rgba(200,200,200,0.1)'}}>stats</div>
            <div style={{margin: '5px', width: '240px',height:'240px', backgroundColor:'white', border:'5px solid black', color:'black'}}>description</div>
         </div>
         <div>Available to purchase at : Amazon.com</div>
      </div>
      <div className="subpage-footer">
         <Link to="/filters"><button onClick={this.clickHandler}>back</button></Link>
      <Link to="/"><button onClick={this.clickHandler}>start over</button></Link>
      </div>
   </div>
)


export default Result
