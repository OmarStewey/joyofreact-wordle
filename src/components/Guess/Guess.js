import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guess, answer }) {
  
  let letters = []
  if(guess){
    letters = checkGuess(guess, answer).map(({letter, status}) => (
      <span key={Math.random()} className={'cell ' + status }>{letter}</span>
    ));
  } else{
    letters = '     '.split('').map(() => <span key={Math.random()} className='cell' />);
  }
  return (<p className='guess' style={{textTransform:'uppercase'}}>
    {
      letters
    }
  </p>);
}

export default Guess;
