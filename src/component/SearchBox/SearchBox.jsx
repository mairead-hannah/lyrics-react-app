import React, { Component } from 'react';

export default class SearchBox extends Component {
  state = {  }
  render() { 
    return (
      <>
      <h3>Artist:</h3>
      <input type="text" placeholder="type artist name here" onChange={this.props.searchArtist}></input> 
      <h3>Song Title:</h3>
      <input type="text" placeholder="type song title here" onChange={this.props.searchSong}></input>  
      </>
    );
  }
}
