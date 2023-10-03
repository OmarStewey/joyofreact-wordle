import React from 'react';

function Banner({ status, answer, attempts }) {
  
  return (<div>
      {(status === "win" && <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {attempts} guesses</strong>.
        </p>
      </div>)}
      {
        (status === "lose" && <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>)}
  </div>);
}

export default Banner;
