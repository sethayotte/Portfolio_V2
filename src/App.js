import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowCircleDown, faArrowCircleRight)

function App() {
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment> 
  );
}

export default App;
