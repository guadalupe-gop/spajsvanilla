import Header from "../templates/Header";
import Home from "../pages/Home";
import character from "../pages/Character";
import Eror404 from "../pages/Error404";
import Character from "../pages/Character";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Eror404;
  content.innerHTML = await render();
};

export default router;
