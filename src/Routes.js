import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PictureGrid from './components/PictureGrid'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={PictureGrid} />
      </div>
    );
  }
}

export default Routes;
