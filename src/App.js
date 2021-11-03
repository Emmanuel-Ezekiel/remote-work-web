import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Jobs from './components/Jobs'
import Footer from './components/footer'
import JobDescription from './components/JobDescription'
import AddJobs from './components/Add-Jobs'
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route  exact path="/">
        <Hero/>
        <Jobs/>
      </Route>
      <Route  path="/JobDescription/:id" children={<JobDescription/>}></Route>
      <Route  path="/Add-jobs">
        <AddJobs/>
      </Route>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
