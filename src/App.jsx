// src/App.jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import HomePage from './Pages/HomePage.jsx';
import ChatsPage from './Pages/ChatsPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/chats" component={ChatsPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </div>
  );
}

export default App;
