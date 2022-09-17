export function init() {
  class H3 extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      this.style.display = "block";
      this.style.fontFamily = "Roboto";
      this.style.fontSize = "22px";
      this.style.fontWeight = "500";
      this.style.color = "black";
      this.style.textAlign = "center";
    }
  }
  customElements.define("custom-h3", H3);
}
