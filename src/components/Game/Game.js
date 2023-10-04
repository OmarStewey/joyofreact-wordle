import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessingBox from '../GuessingBox';
import GuessResults from '../GuessResults';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameStatus, setGameStatus] = React.useState('');

  function addGuess(guess) {
    let nextGuesses = [...guesses];
    nextGuesses.push(guess);
    setGuesses(nextGuesses);


    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
      setGameStatus("lose");
    } else {
      if (guess.toLowerCase() === answer.toLowerCase()) {
        setGameStatus("win");
        setGameOver(true);
      }
    }

  }

  return (
    <>
      {
        (gameOver && <Banner status={gameStatus} answer={answer} attempts={guesses.length} />)
      }
      <GuessResults guesses={guesses} answer={answer} />
      { !gameOver && <GuessingBox addGuess={addGuess} /> }
    </>
  )
}

export default Game;
