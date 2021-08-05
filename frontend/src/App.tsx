import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { useHttp } from './hooks/http.hook';
import './App.css';
import { json } from 'express';

function App() {
  useEffect(() => {
    console.log('start');
  }, []);

  const getPages = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080');
      // setPages(response.data);
    } catch (error) {
      // setPages(error);
    }
  }, []);

  useEffect(() => {
    getPages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <input onChange={(e) => pressHandler} /> */}
      </header>
    </div>
  );
}

export default App;
