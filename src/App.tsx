import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import './pages/global/css/global.css';
import Toolbar from './pages/global/components/toolbar/Toolbar';
import VerticalMenu from './pages/global/components/vertical-menu/vertical-menu';
 
export default function App() : JSX.Element{
  return (
    <div className="app">

      <Toolbar/>
      <VerticalMenu/>

      <Route
        path="/"
        component={Home}
        exact
      />

    </div>
  );
}