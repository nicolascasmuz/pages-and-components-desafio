export function init() {
  class Comenzar extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const label = this.getAttribute("label");

      const style = document.createElement("style");

      style.innerHTML = `
            .button {
                background-color: #9CBBE9;
                width: 100%;
                height: 55px;
                font-size: 22px;
                font-family: "Roboto";
                font-weight: "500";
                border: none;
                border-radius: 4px;
            }
          `;

      const div = document.createElement("div");

      div.innerHTML = `
            <button class="button">${label}</button>
          `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("button-comenzar", Comenzar);
}
