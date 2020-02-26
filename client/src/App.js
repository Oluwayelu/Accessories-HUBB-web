import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './components/Homepage/Home'
import Category from './components/Category/Categories'
import SingleCategory from './components/Category/CategoryProduct'
import Product from './components/Product/Products'

function App() {
  return (
    <Provider store={store}>
      <div className="App lead row justify-content-center">
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/categories" component={Category}/>
            <Route exact path="/products" component={Product}/>
            <Route exact path="/categories/:id" component={SingleCategory}/>
          </Switch>
        <Footer/>
        </Router>
      </div>
    </Provider>

    
  );
}

export default App;
