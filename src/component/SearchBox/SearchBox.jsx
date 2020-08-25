import React, { Component } from 'react';
import styles from "./SearchBox.module.scss"

export default class SearchBox extends Component {
  state = {  }
  render() { 
    return (
      <>
      <div className={styles.search}>
        <h3>Artist:</h3>
        <input type="text" placeholder="type artist name here" onChange={this.props.searchArtist}></input> 
        <h3>Song Title:</h3>
        <input type="text" placeholder="type song title here" onChange={this.props.searchSong}></input>  
      </div>
      </>
    );
  }
}
