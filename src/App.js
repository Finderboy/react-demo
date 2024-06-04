import './App.css';
import Parent from './components/Parent';
import React from 'react';
import Greeting from './components/Greeting';
import RenderList from './components/renderList';
// import Form from './components/Form';
import Category from './components/Category/index1';
import Chat from './components/FancyBorder/Chat';
import Contacts from './components/FancyBorder/Contacts';
import SplitPane from "./components/FancyBorder/index1";
function App() {
  return (
    <div className="App">
      {/*  基础语法渲染+事件+props*/}
      <Parent name={'张三'} />
      {/*  条件渲染 */}
      <Greeting isLoggedIn={true} />
      <RenderList />
      <Category />
      <SplitPane
        left={
          <Chat/>
      }
        right={
          <Contacts/>
      }
      />
    </div>
  );
}

export default App;
