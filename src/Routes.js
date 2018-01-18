import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PictureGrid from './components/PictureGrid'
import Graph1 from './components/Graph1'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PictureGrid} />
        <Route path="/graph1" component={Graph1} />
      </div>
    );
  }
}

export default Routes;
