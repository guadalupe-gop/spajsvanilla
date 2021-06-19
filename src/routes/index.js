import Header from "../templates/Header";
import Home from "../pages/Home";
import character from "../pages/Character";
import Eror404 from "../pages/Error404";
import Character from "../pages/Character";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();
};

export default router;
