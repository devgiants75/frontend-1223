import React from "react";
import Style01 from "./a_Style/Style01";
import Style02 from "./a_Style/Style02";
import Style03 from "./a_Style/Style03";
import { createGlobalStyle } from "styled-components";
import Style04 from "./a_Style/Style04";
import Router01 from "./b_Router/Router01";
import Router02 from "./b_Router/Router02";
import Router03 from "./b_Router/Router03";
import Route from "../0413/b_Route/Route";
import { Routes } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  div {
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }
`;

export default function Index() {
  return (
    <div>
      <GlobalStyle />
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0518
      </h1>

      <h2>1. a_Style</h2>
      <Style01 />
      <Style02 />
      <Style03 />
      <Style04 />

      <h2>2. Router</h2>
      <Router01 />
      <Router02 />
      <Router03 />
      
    </div>
  );
}
