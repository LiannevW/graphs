import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  render() {
    return (
        <div className="container">
             <img className="figure1" src={"https://photoipsum.com/city"}/>
             <img className="figure2" src={"https://photoipsum.com/beach"}/>
             <img className="figure3" src={"https://photoipsum.com/office"}/>
             <img className="figure4" src={"https://photoipsum.com/person"}/>
             <img className="figure5" src={"https://photoipsum.com/food"}/>
        </div>
    );
  }
}

export default Home;
