import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './pages/global/css/global.css';

export default function App() : JSX.Element{
  return (
    <div className="app">

      <Route
        path="/"
        component={Home}
        exact
      />

    </div>
  );
}