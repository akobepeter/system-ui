import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Transaction from "views/Transaction.js";
import CompletedTransaction from "views/CompletedTransaction";
import Dropdown from "react-bootstrap/Dropdown";
import Wallet from "views/Wallet";
import ViewAppointment from "views/ViewAppointment";
import CreateAppointment from "views/CreateAppointment";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/transaction",
    name: "Transaction",
    icon: "bi bi-cash",
    component: Transaction,
    layout: "/admin",
    icon: "bi bi-cash-coin",
  },
  {
    path: "/completed-transaction",
    name: "Completed Transaction",
    icon: "bi bi-cash-coin",
    component: CompletedTransaction,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Wallet",
    icon: "bi bi-wallet-fill",
    component: Wallet,
    layout: "/admin",
  },

  {
    path: "/create-appointment",
    name: "Create Appointment",
    icon: "bi bi-plus",
    component: CreateAppointment,
    layout: "/admin",
  },

  {
    path: "/view-appointment",
    name: "View Appointment",
    icon: "bi bi-eye",
    component: ViewAppointment,
    layout: "/admin",
  },
];

export default dashboardRoutes;
