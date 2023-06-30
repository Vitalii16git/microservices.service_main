import mainController from "../controllers/main.controller";

const routes = [
  {
    method: "post",
    routeName: "userRegister",
    url: "/register",
    validator: [],
    middleware: [],
    controller: mainController.userRegister,
  },
  {
    method: "post",
    routeName: "userLogin",
    url: "/login",
    validator: [],
    middleware: [],
    controller: mainController.userLogin,
  },
];

export default routes;
