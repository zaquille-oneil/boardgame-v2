import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blacklist from './Blacklist'
import Categories from './Categories'
import Filters from './Filters'
import Result from './Result'
import PageNotFound from './PageNotFound'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /blacklist
// and /categories routes will match any pathname that starts
// with /blacklist or /categories. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/blacklist' component={Blacklist}/>
         <Route path='/categories' component={Categories}/>
         <Route path='/filters' component={Filters}/>
         <Route path='/result' component={Result}/>
         <Route path='*' component={PageNotFound} />
      </Switch>

)

export default Main
