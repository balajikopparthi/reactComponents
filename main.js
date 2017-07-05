import React, { Component } from 'react';
import { render } from 'react-dom';
const {HashRouter, Switch, Route, Link} = ReactRouterDOM;
import SimpleComponent2 from './SimpleComponent2.js';

const Roster = () => (
  <div>
    <h1>Welcome to the Tornadoes yyyyyyyyyyy!</h1>
  </div>
)



const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/SimpleComponent2' component={SimpleComponent2}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/SimpleComponent2'>SimpleComponent2</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'))
