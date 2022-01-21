import React from 'react';
import ReactDOM from 'react-dom';

import NamiConnect from './components/NamiConnect';



ReactDOM.render(
  <NamiConnect />,
  document.getElementById('nami')
);

module.hot.accept();