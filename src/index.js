import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [state, setstate] = React.useState(initialState)

const bot=()=>{setstate(state+1)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);