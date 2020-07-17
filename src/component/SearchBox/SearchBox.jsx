import React, { Component } from 'react';
import Lyrics from "../Lyrics";

export default class SearchBox extends Component {
  state = { 
    lyrics: ""
  }

  displayLyrics = (text) => {
    this.setState({ lyrics: text })
  }

  handleClick = () => {

    this.displayLyrics("some random lyrics")

    // fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(jsonObj => {
    //     const lyrics = jsonObj.lyrics;
    //     const outputSection = document.querySelector('section').innerHTML += `<p>${lyrics}</p>`;
  
    //     console.log(lyrics);
  
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  
  }



  render() { 
    return (  
    <>      
      <button onClick={this.handleClick}>click for lyrics</button>
      <Lyrics addLyrics={this.state.lyrics}/>
    </>
    );
  }
}








