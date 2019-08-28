import React, {useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom';


// Import Components
// import TrialData from './components/TrialData';
import HomePage from './components/HomePage.js';
import UserForm from './components/questionnaire/UserForm.js';
import NavBar from './components/NavBar.js';
import StudyDetails from './components/StudyDetails';


function App() {

// State that holds active tab.
const [activeStudy, setActiveStudy] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" render={() => <UserForm setActiveStudy={setActiveStudy} />} />
      <Route path="/study" render={(props) => <StudyDetails activeStudy={activeStudy} />} />
    </div>
  );
}

export default App;
