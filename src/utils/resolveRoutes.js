//con gethash obtenemos la ruta para  saber a que template voy a mandar si al home o seccion de rutas
const resolveRoutes = (route) => {
  // la API es menos de mil characters
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`; //   /about
};

export default resolveRoutes;
