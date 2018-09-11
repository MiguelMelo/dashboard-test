import Dashboard from "views/Dashboard/Dashboard.jsx";
import Clients from "views/Clients/Clients.jsx";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/clients",
    name: "Clients",
    icon: "business_badge",
    component: Clients
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
