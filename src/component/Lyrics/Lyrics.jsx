import React, { Component } from 'react';
import styles from "./Lyrics.module.scss";

export default class Lyrics extends Component {
  state = {  }

  finishedText = (rawLyrics) => {
    const paraArray = rawLyrics.split('\n').map((item, i) => {
      if (item === "") {
        return <br />;
    } else { 
        return <p>{item}</p>;
    }})
    
    console.log (paraArray);
    return paraArray
  }

  render() { 
    return (  <div>{this.finishedText(this.props.addLyrics)}</div>)
  }
}



//renders text with no formatting
// render() { 
//   return (  <p>{this.props.addLyrics}</p>);
// }



//problem:
//raw text renders with no paragraphing or line breaks
//tried to apply function to fix this, but it is not rendering on the page