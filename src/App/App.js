import './App.css';
import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home-p/Home-p';
import Work from '../Components/Work-p/Work-p';
import About from '../Components/About-p/About-p';
import Intro from '../Components/Intro/Intro';

function App() {
  const [page,setPage] = useState('home');

  const renderBody = (page) => {
    switch(page){
      case 'about':
        return <About></About>;
      case 'work':
        return <Work></Work>;
      default:
        return <Home></Home>;
    }
  }

  return (
    <>
      <Intro></Intro>
      {/* <Header setPage={setPage}></Header> */}
      {renderBody(page)}
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
