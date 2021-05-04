import * as React from "react";
import * as ReactDOM from "react-dom";
import retargetEvents from "react-shadow-dom-retarget-events";
import { Component } from "../component/component";

export class MyCustomeComponent extends HTMLElement {
  constructor() {
    super();
    this.mountPoint = document.createElement("span");
  }
  mountPoint: HTMLSpanElement;

  static get observedAttributes() {
    return ["title"];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "title") {
      ReactDOM.render(
        React.createElement(Component, { title: newValue }),
        this.mountPoint
      );
    }
  }

  connectedCallback() {
    this.mountPoint = document.createElement("span");
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(this.mountPoint);

    const title = this.getAttribute("title") || "";
    ReactDOM.render(React.createElement(Component, { title }), this.mountPoint);
    retargetEvents(shadowRoot);
  }
}
window.customElements.define("my-custom-component", MyCustomeComponent);
