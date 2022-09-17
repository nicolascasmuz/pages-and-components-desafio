import { welcomePage } from "./pages/welcome";
import { step1Page } from "./pages/step-1";
import { thankYouPage } from "./pages/thankyou";

const routes = [
  /* {
    path: /\//,
    component: welcomePage,
  }, */
  {
    path: /\/welcome/,
    component: welcomePage,
  },
  {
    path: /\/step-1/,
    component: step1Page,
  },
  {
    path: /\/thankyou/,
    component: thankYouPage,
  },
];

export function initRouter(container) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
