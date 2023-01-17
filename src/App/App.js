import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Work from '../Components/Work-p/Work-p';
import About from '../Components/About-p/About-p';
import Intro from '../Components/Intro/Intro';
import Project from '../Components/Projects/Project/Project';
import Wrapper from '../Components/Wrapper/Wrapper';

function App() {
  const [firstLoad,setFirstLoad] = useState(true);

  if (firstLoad) {
    setTimeout(() => {
      setFirstLoad(false);
    }, 2600);

    return (
      <Intro></Intro>
    )
  } else {
    return (
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link><link href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@700&display=swap" rel="stylesheet"></link>
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/:id' element={<Project />} />
          <Route path='/home' element={<Wrapper />} />
        </Routes>
      </>
    );
  }
}

export default App;
