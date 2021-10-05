import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);
      let btn = document.querySelector("#btn");  
      let sidebar = document.querySelector(".sidebar");
      let searchBtn = document.querySelector(".bx-search");
      btn.onclick = function() {
        sidebar.classList.toggle("active")
      }
      searchBtn.onclick = function() {
        sidebar.classList.toggle("active")
      }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
