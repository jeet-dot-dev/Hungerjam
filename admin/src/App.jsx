import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Order from './pages/Order';

const App = () => {
  return (
    <>
      <div className='flex flex-col w-screen h-full'>
        <div>
          <Header />
        </div>
        <div className='flex h-full w-screen'>
          <Nav />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
