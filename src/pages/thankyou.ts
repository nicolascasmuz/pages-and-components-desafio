import { init as initH1 } from "../components/h1/h1";
import { init as initH3 } from "../components/h3/h3";
import { init as initComenzar } from "../components/comenzar/comenzar";

export function thankYouPage(url) {
  initH1();
  initH3();
  initComenzar();

  const addEl = document.createElement("div");
  addEl.innerHTML = `
  <section class="section-welcome">
    <custom-h1>Gracias</custom-h1>
    <custom-h3>Toda la información que nos brindaste es muy importante</custom-h3>
    <button-comenzar label="De nada"></button-comenzar>
  </section>
  `;

  const buttonComenzarEl = addEl.querySelector(
    "button-comenzar"
  ) as HTMLElement;

  buttonComenzarEl.addEventListener("click", () => {
    url.goTo("/welcome");
  });

  return addEl;
}
