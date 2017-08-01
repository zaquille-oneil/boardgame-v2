import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

class Result extends Component {
   constructor(props) {
      super(props)
      this.state =
         props.generate()
         // data : {
         //    label: '',
         //    value: '',
         //    image : '',
      	// 	description : '',
      	// 	year : '',
      	// 	players : '',
      	// 	duration : '',
      	// 	genreandmech : '',
      	// 	category : '',
      	// 	rating : '',
      	// 	weight : ''
         // },
         // numResults : 0


      this.handleGenerate = this.handleGenerate.bind(this)
   }

   handleGenerate() {
      this.setState(this.props.generate())
   }

   render() {
      let x = [];
      for (var i = 0; i < this.state.data.genreandmech.length; ++i) {
         x.push(this.state.data.genreandmech[i])
         if (i < this.state.data.genreandmech.length - 1) {
            x.push(', ')
         }
      }
      let y = [];
      for (var i = 1; i < this.state.data.category.length; ++i) {
         if (i === 1){
            y.push('Category: ')
         }
         y.push(this.state.data.category[i])
         if (i < this.state.data.category.length - 1) {
            y.push(', ')
         }
      }
      let z = <div className="subpage-main">Out of suggestions! try starting over..</div>;
      if (this.state.numResults > 0) {
         z = <div className="subpage-main">
         <button onClick={this.handleGenerate}>Generate</button>
         <p>Ever heard of  {this.state.data.label}?</p>
         <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent: 'center'}}>
            <div style={{margin: '10px', width: '250px',height:'230px', color:'black',}}>
               <img style={{maxWidth: '100%', maxHeight: '100%'}} src={[this.state.data.image]} ></img>
            </div>
            <div style={{margin: '5px', padding: '2px', width: '255px',height:'255px', backgroundColor:'rgba(200,200,200,0.1)', color:'white', overflow: 'auto'}}>
               Description: {decodeHtml(this.state.data.description)}
            </div>
            <div style={{textAlign: 'left', paddingLeft: '6px', paddingRight: '6px', margin: '5px', width: '250px', display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
               <span>Year: {this.state.data.year}</span>
               <span>Players: {this.state.data.players[0]} to {this.state.data.players[1]}</span>
               <span>Duration: {this.state.data.duration[0]} to {this.state.data.duration[1]} minutes</span>
               <span>Genres: {x}</span>
               <span>Average Rating: {this.state.data.rating}</span>
               <span>Complexity out of 5: {this.state.data.weight}</span>
               <span>{y}</span>
            </div>
         </div>
      </div>
      }
      return (
         <div className="App-bodywrapper">
            <div className="subpage-main">
               {z}
            </div>
            <div className="subpage-footer">
               <Link to="/filters"><button onClick={this.clickHandler}>back</button></Link>
               <Link to="/"><button onClick={this.clickHandler}>start over</button></Link>
            </div>
         </div>
   )}
}

export default Result