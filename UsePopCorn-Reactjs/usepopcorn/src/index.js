import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} /> */}
    {/* <Test /> */}
    
  </React.StrictMode>
);

// function Test(){
//   const [moverating, setMovieRating] = useState(0);
//   return (
//     <>
//     <StarRating maxRating={5} size={24} color='green' defaultRating={0} onSetRating={setMovieRating}/>
//     <p>The Movie has {moverating} rating</p>
//     </>
//   );
// }
