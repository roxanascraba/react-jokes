import React, { useEffect, useState } from 'react';
import { JokeOfTheDayAPI } from '../api/jokeapi';
import { translateToRovare } from './Translator';

const JokeOfTheDay = () => {
  
  // eslint-disable-next-line
  const [joke, setJoke] = useState({});
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => { 
    const getJoke = async () => {
      try {
          const { data } = await JokeOfTheDayAPI.get();

          if (data.type === 'twopart') { // twopart joke
            setJoke({id: data.id, type: data.type, part1: data.setup, part2: data.delivery});
          } else { // onepart joke
            setJoke({id: data.id, type: data.type, part1: data.joke});
          }
      } catch (error) {
          console.log("Error on fetching joke: ", error);
      }
    };
    getJoke();
  },[]);

  const renderJoke = (joke) => {
    if (joke.type === 'single') {
      return (
        <div className='jokeText'>
          <div className="jokePart1">{joke.part1}</div>
        </div>
      );
    }
    if (joke.type === 'twopart') {
      return (
        <div className='jokeText'>
          <div className='jokePart1'>{joke.part1}</div>
          <div className='jokePart2'>{joke.part2}</div>
        </div>
      );
    }
  };

  const handleSubmit = () => {
    if (joke.type === 'single') {
      let text1 = translateToRovare(joke.part1);
      setTranslatedText(text1);
    }
    if (joke.type === 'twopart') {
      let text1 = translateToRovare(joke.part1);
      let text2 = translateToRovare(joke.part2);
      setTranslatedText(text1.concat(text2)); 
    }
  };

  return (
    <div className="jokeDay">
      <h1>Joke of the day</h1>
      <div className="joke" key={joke.id}>
        {renderJoke(joke)}
        <div className="jokeTranslateButton">
          <div 
            onClick={handleSubmit} 
            className="jokeTranslate button submit"
          >Translate</div>
        </div>
        <div className="jokeText">
          {translatedText}
        </div>
      </div>
    </div>
  )
}

export default JokeOfTheDay;