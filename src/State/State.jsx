import React, { Component } from 'react'
import Header from './Header'
import Body_State from './Body_State';
import Body_RenderWidthMap from './Body_RenderWidthMap';
import './style.css';

export default class State extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Cách 1 dùng state setState */}
        {/* <Body_State /> */}

        {/* Cách 2 dùng renderWidthMap */}
        <Body_RenderWidthMap />
      </div>
    )
  }
}
