import React, { useEffect, useState } from 'react';
import { JokesAPI } from '../api/jokeapi';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => { 
    const getJokes = async () => {
      try {
          const { data } = await JokesAPI.get();
          setJokes(data.jokes);
      } catch (error) {
          console.log("Error on fetching jokes: ", error);
      }
    };
    getJokes();
  // eslint-disable-next-line
  },[]);

  const renderListOfJokes = jokes.map((joke) => {
    if (!joke) {
      return 'No joke!';
    }

    return (
      <div className="joke" key={joke.id}>
        <div className="jokeText">{joke.joke}</div>
      </div>
    );
  });

  return (
    <div className="jokes">
      <h1>Jokes</h1>
      {renderListOfJokes}
    </div>
  );
};

export default Jokes;