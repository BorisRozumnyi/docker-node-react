import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:8080');
      setData(response.data);
    } catch (error) {
      setData(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {data && data}
        </p>
      </header>
    </div>
  );
}

export default App;
