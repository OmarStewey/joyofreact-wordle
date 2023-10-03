import React from 'react';

function GuessingBox({addGuess}) {
  const [guess, setGuess] = React.useState('');

  function onSubmit(e) {
    e.preventDefault();
    addGuess(guess);
    setGuess('');
  }

  return <div>
    <form className="guess-input-wrapper" onSubmit={(e) => {onSubmit(e)}}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
             type="text" 
             value={guess} 
             onChange={(e) => {setGuess(e.target.value)}} 
             maxLength={5}
             minLength={5}
             style={{textTransform: 'uppercase'}}
             />
    </form>
  </div>;
}

export default GuessingBox;
