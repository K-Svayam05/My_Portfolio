// import React from 'react';

// import './index.css';
// import App from './App';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom/client';
// // import reportWebVitals from './reportWebVitals';
// // const React = require('react');
// // const ReactDOM = require('react-dom');
// // const App = require('./App');

// // The rest of your code remains the same

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
    
// //   </React.StrictMode>
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

// // ReactDOM.render(
// //   <Router>
// //     <Routes>
// //       <Route path="/" element={<App />} />
// //     </Routes>
// //   </Router>,
// //   document.getElementById('root')
// // );
// ReactDOM.render(<App />, document.getElementById('root'));

// // reportWebVitals();import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
