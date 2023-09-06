import React from 'react';
import thor from './Assets/thor.png'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to='/'>
      <img className='logo' src={thor} alt="Cart Icon" />
      </Link>
      <div className="nav-list">
        <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Remeras </NavLink>
        <NavLink to={`/category/pantalones`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Pantalones </NavLink> 
        <NavLink to={`/category/zapatillas`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Zapatillas </NavLink>
        <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? 'ActiveOption' : 'option'}> Accesorios </NavLink>    
       </div>
      <CartWidget className='CartWidget'/>
    </nav>
  );
};

export default Navbar;