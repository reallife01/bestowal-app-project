import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import './app.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
