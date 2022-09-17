export function init() {
  class P extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.display = "block";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "18px";
      this.style.fontWeight = "400";
      this.style.color = "black";
      this.style.margin = "0px";
    }
  }
  customElements.define("custom-p", P);
}
