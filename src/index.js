import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  HashRouter as Router
} from "react-router-dom";
import { TourProvider } from '@reactour/tour'
import { steps } from './utils/steps';


ReactDOM.render(
  <TourProvider steps={steps}>
    <Router>
      <App />
    </Router>
  </TourProvider>,
  document.getElementById('root')
);


reportWebVitals();
