// src/App.js

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import TodoList from './components/TodoList';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('jwt'));

  useEffect(() => {
    if (isLoggedIn && (window.location.pathname === '/signin' || window.location.pathname === '/signup')) {
      window.location.pathname = '/todo';
    } else if (!isLoggedIn && window.location.pathname === '/todo') {
      window.location.pathname = '/signin';
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/todo" component={TodoList} />
    </Router>
  );
}

export default App;
