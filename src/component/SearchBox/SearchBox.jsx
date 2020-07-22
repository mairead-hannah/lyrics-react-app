import React, { Component } from 'react';
import Lyrics from "../Lyrics";

export default class SearchBox extends Component {
  state = { 
    lyricText: ""
  }


  getLyrics = () => {
    fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      const lyrics = jsonObj.lyrics; //'lyrics' ref refers to what I have in postman
      this.setState({ lyricText: lyrics }) //as above
      console.log(lyrics)
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() { 
    return (  
    <>      
      <button onClick={this.getLyrics}>click for lyrics</button>
      <Lyrics addLyrics={this.state.lyricText}/>
    </>
    );
  }
}







