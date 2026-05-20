// src/App.js - Version complète et corrigée
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;