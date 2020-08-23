import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import Kotrace from '../dttrace';
Kotrace.init({
  appKey:'71704164',
  getUserId:function(){
    return 'userId123' 
  },
  debug:true
});


render(
  <App></App>,
  document.getElementById("root")
); 
