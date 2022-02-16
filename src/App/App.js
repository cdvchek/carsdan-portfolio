import './App.css';
import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Work from '../Components/Work-p/Work-p';
import About from '../Components/About-p/About-p';
import Intro from '../Components/Intro/Intro';

function App() {
  const [page,setPage] = useState('work');
  const [firstLoad,setFirstLoad] = useState(true);
  const renderBody = (page) => {
    if (firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
        setPage('work');
      },2600);
    } else {
      switch(page){
        case 'about':
          return <About></About>;
        default:
          return <Work></Work>;
      }
    }
  }

  return (
    <>
      <Intro></Intro>
      <Header setPage={setPage}></Header>
      {renderBody(page)}
    </>
  );
}

export default App;
