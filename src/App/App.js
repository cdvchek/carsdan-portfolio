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
      <link rel="preconnect" href="https://fonts.googleapis.com"></link><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link><link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@700&display=swap" rel="stylesheet"></link>
      <Intro></Intro>
      <Header setPage={setPage}></Header>
      {renderBody(page)}
    </>
  );
}

export default App;
