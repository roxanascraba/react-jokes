import React, { useEffect, useState } from 'react';
import { JokesAPI } from '../api/jokeapi';
// import { translateToRovare } from './Translator';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  // const [translatedText, setTranslatedText] = useState('');

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

  // const handleClick = (joke) => {
  //   if (joke.type === 'single') {
  //     let text1 = translateToRovare(joke.part1);
  //     setTranslatedText(text1);
  //   }
  //   if (joke.type === 'twopart') {
  //     let text1 = translateToRovare(joke.part1);
  //     let text2 = translateToRovare(joke.part2);
  //     setTranslatedText(text1.concat(text2)); 
  //   }
  // };

  const renderListOfJokes = jokes.map((joke) => {
    if (!joke) {
      return 'No joke!';
    }

    return (
      <div className="joke" key={joke.id}>
        <div className="jokeText">{joke.joke}</div>
        {/* <div className="jokeTranslateButton">
          <div 
            // onClick={handleClick(joke)} 
            className="jokeTranslate button submit">Translate</div>
        </div> */}
        {/* <div className="jokeText"> 
          {translatedText}
        </div> */}
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