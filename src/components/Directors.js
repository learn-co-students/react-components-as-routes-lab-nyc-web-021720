import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {
          directors.map(d => {
        return (
            <div>
              <h2>{d.name}</h2> 
              {d.movies.map(movie => <ul>{movie}</ul>)}
            </div>
           )})
        
        }
    </div>
  );
}

export default Directors
