import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
function GuessResults({ guesses, answer }) {

  return <div>
    <div className="guess-results">
      {
        range(NUM_OF_GUESSES_ALLOWED).map(index =>{ 
          let guess = guesses[index]
          return ( !!guess ? 
                      <Guess key={crypto.randomUUID()} guess={guesses[index]} answer={answer} />
                      : <Guess key={crypto.randomUUID()} answer={answer} />
        )}
        )
      }
    </div>
  </div>;
}

export default GuessResults;
