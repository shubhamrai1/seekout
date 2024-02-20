import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './store';
import './index.css';
import ListScreen from './ListScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<ListScreen />} />
        <Route path="/addNew" element={<ListScreen />} />
      </Routes>
    </Router>
  </Provider>
);