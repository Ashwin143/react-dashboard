import React from 'react'
// import { Route, Routes } from 'react-router-dom' for verion 6
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'

const Fun = () => {
  return (
      <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path='/customers' component={Customers}/>
      </Switch>
  )
}


export default Fun
