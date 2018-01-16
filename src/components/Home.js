import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="contianer">
        <img id="pic1" src={"https://photoipsum.com/city"}/>
        <img id="pic2" src={"https://photoipsum.com/beach"}/>
        <img id="pic3" src={"https://photoipsum.com/office"}/>
        <img id="pic4" src={"https://photoipsum.com/person"}/>
        <img id="pic5" src={"https://photoipsum.com/food"}/>
        <img id="pic6" src={"https://photoipsum.com/code"}/>
    </div>
    );
  }
}

export default Home;
