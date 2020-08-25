import React, { Component } from 'react';
import SearchBox from "../SearchBox";
import Button from "../Button";
import Lyrics from "../Lyrics";

export default class Logic extends Component {
  state = { 
    lyricText: "",
    artistName: "",
    songTitle: ""
  }

  setArtistName = (event) => {
    this.setState({artistName: event.target.value})
    console.log(this.state.artistName);
  }
  

  setSongTitle = (event) => {
    this.setState({songTitle: event.target.value})
  }


  getLyrics = () => {
    fetch(`https://api.lyrics.ovh/v1/${this.state.artistName}/${this.state.songTitle}`)
    .then(response => {
      return response.json();
    })
    .then(jsonObj => {
      if (!jsonObj.lyrics) {
        this.setState({lyricText: `Sorry, these lyrics have not been found`})
    } else {
      const lyrics = jsonObj.lyrics; //'lyrics' ref refers to what I have in postman
      this.setState({ lyricText: lyrics }) //as above
      console.log(lyrics)
    }})
  
    .catch(error => {
      console.log(error);
    })
  
  }


  render() { 
    return (  
    <>
      <SearchBox
        searchArtist={this.setArtistName}
        searchSong={this.setSongTitle}
      />
      <Button buttonLogic={this.getLyrics} text="Submit"/>
      <Lyrics addLyrics={this.state.lyricText}/>
    </>
    );
  }
}







//questions
//how to pass in the name of the artist and song?
//how should the components be organised in the tree?