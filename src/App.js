import React from 'react';
import MUITheme from './theme';
import { MainPage, Header } from './components';
import './App.css';

const App = () => (
  <MUITheme>
    <div className="App">
      <Header />
      <MainPage />
    </div>
  </MUITheme>
);

export default App;
