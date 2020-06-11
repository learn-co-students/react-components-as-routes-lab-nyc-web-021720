import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => {
          return(
            <div>
              <h2>{actor.name}</h2>
              {actor.movies.map(m => <ul>{m}</ul>)}
            </div>
          )
        })
      }

    </div>
  );
};

export default Actors;
