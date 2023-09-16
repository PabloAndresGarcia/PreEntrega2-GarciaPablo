import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './index.css'



const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1 className='text-primary text-5xl font-bold items-center justify-center flex mt-40'>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>     
        
        
    </div>
  );
};

export default App;