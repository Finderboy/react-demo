import './App.css';
import Parent from './components/Parent';
import React, { useState } from 'react';
import Greeting from './components/Greeting';
import RenderList from './components/renderList';
// import Form from './components/Form';
import Category from './components/Category/index1';
import Chat from './components/FancyBorder/Chat';
import Contacts from './components/FancyBorder/Contacts';
import SplitPane from "./components/FancyBorder/index1";
import ViewModel from "./components/ViewModel";
import withLoading from "./components/Hoc/index";
import DataList from "./components/Hoc/DataList";
import Parents from "./components/callback/index";
function App() {
    const DataListWithLoading = withLoading(DataList);
    const [data, setData] = useState(['1','2','3','4']);
    const [isLoading, setIsLoading] = useState(false);
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
      <ViewModel />
      <DataListWithLoading data={data} isLoading={isLoading} />
      <Parents />
    </div>
  );
}

export default App;
