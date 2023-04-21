import React, { Component } from "react";
import Header from "./Header";

import Body_RenderWidthMap from "./Body/Body_State_Props";
import Body_State from "./Body/Body_State";
import Body_State_Props from "./Body/Body_State_Props";
import "./style.css";

export default class BaiTapState extends Component {
  render() {
    return (
      <div>
        <Header />

        {/* CÁCH 1: dùng state setState */}
        {/* <Body_State /> */}

        {/* CÁCH 2: dùng state setState renderWidthMap */}
        {/* <Body_RenderWidthMap /> */}

        {/* CÁCH 3: dùng state setState renderWidthMap Props */}
        <Body_State_Props />
      </div>
    );
  }
}
