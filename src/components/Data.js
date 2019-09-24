import React from 'react';
import database from '../firebase/firebase';
import randomstring from 'randomstring';

const rando = () => {
  const first = randomstring.generate(5);
  const second = randomstring.generate(10);

  database.ref('rando').set({
    first,
    second
  })
}

const Data = () => (
  <div>
    <h1>got dat weather doe</h1>
    <h2 onClick={rando}>add some data</h2>
  </div>
)

export default Data;