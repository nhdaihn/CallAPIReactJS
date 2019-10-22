/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  var showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return <Switch>{result}</Switch>;
  }
  return (
    <Router> <div className="container">
      <Menu />
      <ProductListPage />
      {showContentMenus(routes)}
    </div>
    </Router>

  );
}

export default App;
