import './App.css';
import Parent from './components/Parent';
import React from 'react';
import Greeting from './components/Greeting';
import RenderList from './components/renderList';
import Form from './components/Form';
function App() {
  return (
    <div className="App">
      {/*  基础语法渲染+事件+props*/}
      <Parent name={'张三'} />
      {/*  条件渲染 */}
      <Greeting isLoggedIn={true} />
      <RenderList />
      <Form />
    </div>
  );
}

export default App;
