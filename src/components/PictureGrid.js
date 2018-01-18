import React, { Component } from 'react';
import './PictureGrid.css'

class PictureGrid extends Component {
  render() {
    return (
        <div className="container">
          <div className="picContainer figure1">
            <img className="imag" src={"https://photoipsum.com/city"}/>
            <button className="btn">Button</button>
          </div>

          <div className="picContainer figure2">
            <img className="imag" src={"https://photoipsum.com/beach"}/>
            <button className="btn">Button</button>
          </div>

          <div className="picContainer figure3">
            <img className="imag" src={"https://photoipsum.com/office"}/>
            <button className="btn">Button</button>
          </div>

          <div className="picContainer figure4">
            <img className="imag" src={"https://photoipsum.com/person"}/>
            <button className="btn">Button</button>
          </div>

          <div className="picContainer figure5">
            <img className="imag" src={"https://photoipsum.com/food"}/>
            <button className="btn">Button</button>
          </div>
      </div>
    );
  }
}

export default PictureGrid;
