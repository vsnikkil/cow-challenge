import "@babel/polyfill";
import React from "react";
import Application from "./Application";
import { render } from "react-dom";

const body = document.body;
const applicationWrapper = document.createElement("section");
applicationWrapper.setAttribute("class", "application-wrapper");

body.appendChild(applicationWrapper);

render(<Application />, applicationWrapper);
