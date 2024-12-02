import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Add from '../pages/Add'
import Edit from '../pages/Edit'
import Home from '../pages/Home'
import Order from '../pages/Order'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add'>Add</Link></li>
        <li><Link to='/order'>Orders</Link></li>
      </ul>
    </div>
  )
}

export default Nav