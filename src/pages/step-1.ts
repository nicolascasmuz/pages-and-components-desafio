import { init as initH1 } from "../components/h1/h1";
import { init as initTextField } from "../components/text-field/text-field";
import { init as initSelect } from "../components/select/select";
import { init as initComenzar } from "../components/comenzar/comenzar";
import { init as initVolver } from "../components/volver/volver";

export function step1Page(url) {
  initH1();
  initTextField();
  initSelect();
  initComenzar();
  initVolver();

  const addEl = document.createElement("div");
  addEl.innerHTML = `
  <section class="section-step1">
    <custom-h1>Necesitamos algunos datos más</custom-h1>
    <text-field label="Email"></text-field>
    <text-field label="Comida favorita"></text-field>
    <custom-select label="Alguna de estas tres opciones"></custom-select>
    <button-comenzar label="Continuar"></button-comenzar>
    <button-volver label="Volver"></button-volver>
  </section>
  `;

  const buttonVolver = addEl.querySelector("button-volver") as HTMLElement;

  buttonVolver.addEventListener("click", () => {
    url.goTo("/welcome");
  });

  const buttonComenzarEl = addEl.querySelector(
    "button-comenzar"
  ) as HTMLElement;

  buttonComenzarEl.addEventListener("click", () => {
    url.goTo("/thankyou");
  });

  return addEl;
}
