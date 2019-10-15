/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="container">
      <Menu />
      <button type="button" className="btn btn-primary mb-10">Add New</button>
      <ProductList />
    </div>
  );
}

export default App;
