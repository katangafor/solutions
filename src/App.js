import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

function App() {
  return (
      <AppRouter />
  );
}

console.log(process.env.REACT_APP_DEV_API_URL);

export default App;