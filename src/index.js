import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './Mapper.css'
import Andar1 from './Andar1';
import Andar2 from './Andar2';

var andar = 1;

export function setAndar(n) {
  andar=n;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {andar === 1 && <Andar1 />}
    {andar === 2 && <Andar2 />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();