import React, { Component } from 'react';
import SearchBox from './component/SearchBox'


export default class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <SearchBox/>
      
      
      </>
    );
  }
}










//vanilla JS code for the API

// const handleClick = () => {

//   fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
//     .then(response => {
//       return response.json();
//     })
//     .then(jsonObj => {
//       const lyrics = jsonObj.lyrics;
//       const outputSection = document.querySelector('section').innerHTML += `<p>${lyrics}</p>`;

//       console.log(lyrics);

//     })
//     .catch(error => {
//       console.log(error);
//     })

// }

// document.querySelector('button').onclick = handleClick;

// //api url: https://lyricsovh.docs.apiary.io/#