import './App.css';
import Parent from './components/Parent';
import React from 'react';
import Greeting from './components/Greeting';
import RenderList from './components/renderList';
// import Form from './components/Form';
import Category from './components/Category/index1';
function App() {
  return (
    <div className="App">
      {/*  基础语法渲染+事件+props*/}
      <Parent name={'张三'} />
      {/*  条件渲染 */}
      <Greeting isLoggedIn={true} />
      <RenderList />
      <Category />
    </div>
  );
}

export default App;
