import React from 'react';

// Components
import './App.css';
import { Nav } from './components/Nav';

export function App() {
  return (
    <div>
      <h1>Hello, {new Date().toString()}</h1>
      <Nav />
    </div>
  );
}
