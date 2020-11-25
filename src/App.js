import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import SocialNavBar from './components/SocialNavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleRight, faStream} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleDown, faArrowCircleRight, faStream)

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SocialNavBar />
    </React.Fragment> 
  );
}

export default App;
