import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Home from './pages/Home'
import Order from './pages/Order'


const App = () => {
  return (
    <>
    <div>
     <div>
     <Header/>
     </div>
     <div>
      <Nav/>
      <Routes>
        <Route to='/add'  element={<Add/>}></Route>
        <Route to='/edit'  element={<Edit/>}></Route>
        <Route to='/'  element={<Home/>}></Route>
        <Route to='/order'  element={<Order/>}></Route>
      </Routes>
     </div>

    </div>
    </>
  )
}

export default App