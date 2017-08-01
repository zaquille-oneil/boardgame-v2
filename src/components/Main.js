import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blacklist from './Blacklist'
import Categories from './Categories'
import Filters from './Filters'
import Result from './Result'
import PageNotFound from './PageNotFound'

const data = require('../bgdata.json')

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /blacklist
// and /categories routes will match any pathname that starts
// with /blacklist or /categories. The / route will only match
// when the pathname is exactly the string "/"

//abstracts familygames strategygames cgs thematic partygames wargames childrensgames

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const getRand = (min,max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min
}

class Main extends Component {
   constructor(props) {
      super(props)
      this.state = {
         blacklist : [],
         categories : {party : false, abstract : false, euro : false},
         filters : {
            rating : 0,
            duration : 0,
            //ageGroup : 0,
            playerLimit: 0,
            weight : 0
         }
      }

      this.childSetState = this.childSetState.bind(this)
      this.generateResult = this.generateResult.bind(this)
      this.refresh = this.refresh.bind(this)
   }

   childSetState(label, val) {
      this.setState({[label] : val})
   }

   refresh() {
      this.setState({
         blacklist : [],
         categories : {party : false, abstract : false, euro : false},
         filters : {
            rating : 0,
            duration : 0,
            //ageGroup : 0,
            playerLimit: 0,
            weight : 0
         }
      })
   }

   generateResult() {
      var x = data.slice();
      //console.log(x.length)
      //console.log('generating')
      //console.log(this.state.filters.rating)
      for (var i = 0; i < x.length; ++i) {
         // if you've played it before, remove
         //console.log(x[i].category)
         if ((this.state.blacklist).includes(x[i].value)) {
            x.splice(i,1)
            console.log('blacklisted')
            --i; continue;
         }
         // if party is off, remove
         if (!this.state.categories.party) {
            if (x[i].category.includes('partygames') || x[i].category.includes('childrensgames') || x[i].category.includes('familygames') ) {
               x.splice(i,1)
                  // console.log('party off')
               --i; continue;
            }
         }
         // if absrtract is off, remove
         if (!this.state.categories.abstract && x[i].category) {
            if (x[i].category.includes('abstracts') || x[i].category.includes('cgs') || x[i].category.includes('thematic') ) {
               x.splice(i,1)
                  // console.log('abstract off')
               --i; continue;
            }
         }
         // if euro is off, remove
         if (!this.state.categories.euro) {
            if (x[i].category.includes('wargames') || x[i].category.includes('strategygames')) {
               x.splice(i,1)
                  // console.log('euro off')
               --i; continue;
            }
         }
         // if rating is wrong
         if (this.state.filters.rating !== 0) {
         if (this.state.filters.rating > x[i].rating) {
               x.splice(i,1)
               // console.log('rating off')
               --i; continue;
         }}
         // if duration is wrong
         if (this.state.filters.duration !== 0) {
         if (this.state.filters.duration > x[i].duration[1] || this.state.filters.duration < x[i].duration[0]) {
               x.splice(i,1)
               // console.log('duration off')
               --i; continue;
         }}
         // if ageGroup is wrong
         // if (this.state.filters.ageGroup.value > x[i].ageGroup[1] || this.state.filters.ageGroup.value < x[i].ageGroup[0]) {
         //       x.splice(i,1)
         //       --i;
         //       continue;
         // }
         // if playerLimit is wrong
         if (this.state.filters.playerLimit !== 0) {
         if (this.state.filters.playerLimit > x[i].players[1] || this.state.filters.playerLimit < x[i].players[0]) {
               x.splice(i,1)
               // console.log('players off')
               --i; continue;
         }}
         // if weight is wrong
         if (this.state.filters.weight !== 0) {
         if (Math.abs(this.state.filters.weight - x[i].weight[1]) > 1) {
               x.splice(i,1)
               // console.log('weight off')
               --i; continue;
         }}
      }
      if (x.length !== 0) {
         var randGame = x[getRand(0,x.length-1)];
         var copy = this.state.blacklist.slice();
         copy.push(randGame.value)
         this.setState({blacklist: copy})
         return {data : randGame, numResults : x.length};
      }
      return {
         data : {
            label: '',
            value: '',
            image : '',
      		description : '',
      		year : '',
      		players : '',
      		duration : '',
      		genreandmech : '',
      		category : '',
      		rating : '',
      		weight : ''
         },
         numResults : 0
      };

   }

   render() {
      return(
      <Switch>
         <PropsRoute exact path='/' component={Home} refresh={this.refresh}/>
         <PropsRoute path='/blacklist' component={Blacklist} blacklist={this.state.blacklist} changeParent={this.childSetState}/>
         <PropsRoute path='/categories' component={Categories} categories={this.state.categories} changeParent={this.childSetState}/>
         <PropsRoute path='/filters' component={Filters} filters={this.state.filters} changeParent={this.childSetState}/>
         <PropsRoute path='/result' component={Result} generate={this.generateResult}/>
         <Route path='*' component={PageNotFound} />
      </Switch>
      )
   }
}

export default Main
