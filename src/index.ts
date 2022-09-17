import { init as initHeader } from "./components/header/header";
import { init as initFooter } from "./components/footer/footer";
import { initRouter } from "./routes";

(function () {
  initHeader();
  initFooter();
  const containerEl = document.querySelector(".general");
  initRouter(containerEl);
})();
