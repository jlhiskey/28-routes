import '@babel/polyfill';
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Home from '../home/home';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <div>
            <Header/>
            <nav>
              <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/dashboard"> Dashboard </Link></li>
              </ul>
            </nav>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
          </div>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
