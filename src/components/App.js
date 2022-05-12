import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import Translator from "./Translator";
import Jokes from "./Jokes";
import JokeOfTheDay from "./JokeOfTheDay";

const App = () => {

  return (
      <div className="appContainer">
        <Router>
          <React.Fragment>
            <Header />
            <Routes>
              <React.Fragment>
                <Route path="/" element={<Translator />} />
                <Route path="/jokes" element={<Jokes />} />
                <Route path="/jokes/day" element={<JokeOfTheDay />} />
              </React.Fragment>
            </Routes>
          </React.Fragment>
        </Router>
      </div>
  )
};

export default App;