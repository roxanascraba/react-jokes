import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <React.Fragment>
      <header>
        <Link 
          to="/" 
          className="appTitle"
        >
            Rövarspråket
        </Link>
        
        <div className="appJoke">
          <Link 
            to="/jokes" 
            className="appJokes button"
          >
            Jokes
          </Link>
          <Link 
            to="/jokes/day" 
            className="appJokeOfTheDay button"
          >
            Joke of the day
          </Link>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header;