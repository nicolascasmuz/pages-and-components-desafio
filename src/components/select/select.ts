export function init() {
  class Select extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const label = this.getAttribute("label");

      const style = document.createElement("style");

      style.innerHTML = `
        .root {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }
        .label {
            font-size: 18px;
            font-family: "Roboto";
            font-weight: "400";
        }
        .input {
            height: 55px;
            font-size: 18px;
            border: solid 2px black;
            border-radius: 4px;
            font-family: "Roboto";
            font-weight: "400";
        }
      `;

      const div = document.createElement("div");
      div.classList.add("root");

      div.innerHTML = `
      <label class="label">${label}</label>
      <select class="input">
        <option>Piedra</option>
        <option>Papel</option>
        <option>Tijera</option>
      </select>
        `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("custom-select", Select);
}
