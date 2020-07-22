import React, { Component } from 'react';

export default class Lyrics extends Component {
  state = {  }

  finishedText = (rawLyrics) => {
    const paraArray = rawLyrics.split('\n').map((item, i) => {
      return <p>{item}</p>
    })
    // const lineArray = 
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