import * as React from "react";
import * as ReactDOM from "react-dom";
import retargetEvents from 'react-shadow-dom-retarget-events';
import { Component } from "../component/component";

export class MyCustomeComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement("span");
  }
  mountPoint: HTMLSpanElement;


  connectedCallback() {
    this.mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);

    ReactDOM.render(React.createElement(Component), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}
window.customElements.define("my-custom-component", MyCustomeComponent);
