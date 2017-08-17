import React from 'react';
import ReactDom from 'react-dom';
import Main from './components/main';
require('../dist/style.css');

ReactDom.render(
  <Main />, document.getElementById('root')	
);