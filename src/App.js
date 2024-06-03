import './App.css';
import Parent from './components/Parent';
import React, { useState } from 'react';
import Greeting from './components/Greeting';
function App() {
  return (
    <div className="App">
      {/*  基础语法渲染+事件+props*/}
      <Parent name={'张三'} />
      {/*  条件渲染 */}
      <Greeting isLoggedIn={true} />
    </div>
  );
}

export default App;
