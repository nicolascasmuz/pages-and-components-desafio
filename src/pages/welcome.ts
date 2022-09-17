import { init as initH1 } from "../components/h1/h1";
import { init as initP } from "../components/p/p";
import { init as initH3 } from "../components/h3/h3";
import { init as initTextField } from "../components/text-field/text-field";
import { init as initComenzar } from "../components/comenzar/comenzar";

export function welcomePage(url) {
  initH1();
  initH3();
  initP();
  initTextField();
  initComenzar();

  const addEl = document.createElement("div");
  addEl.innerHTML = `
  <section class="section-welcome">
    <custom-h1>Te damos la bienvenida a esta página</custom-h1>
    <custom-p>
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Veniam consequuntur iure voluptas quia accusantium
      voluptatum aspernatur provident et repudiandae quam veritatis,
      libero porro sit beatae laboriosam a aut consequatur quidem?
    </custom-p>
    <custom-h3>Para continuar ingresá tu nombre</custom-h3>
    <text-field label="Nombre"></text-field>
    <button-comenzar label="Continuar"></button-comenzar>
  </section>
  `;

  const buttonComenzarEl = addEl.querySelector(
    "button-comenzar"
  ) as HTMLElement;

  buttonComenzarEl.addEventListener("click", () => {
    url.goTo("/step-1");
  });

  return addEl;
}
