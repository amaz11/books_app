import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/booksForm" exact component={Forms} />
        </Switch>
     
     </Router>
    </div>
  );
}

export default App;
