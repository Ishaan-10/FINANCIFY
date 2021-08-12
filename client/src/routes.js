import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Transaction from "views/Transaction";
import Subscription from "views/Subscription.js";
import NewsFeed from "views/NewsFeed";
import Goals from "views/Goals.js";
import Scan from "views/Scan";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Overview",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/wallet",
    name: "Manage Wallet",
    icon: "nc-icon nc-notes",
    component: Transaction,
    layout: "/admin",
  },
  {
    path: "/scan",
    name: "Scan Receipts",
    icon: "nc-icon nc-zoom-split",
    component: Scan,
    layout: "/admin",
  },
  {
    path: "/subscription",
    name: "Manage Subs",
    icon: "nc-icon nc-paper-2",
    component: Subscription,
    layout: "/admin",
  },
  {
    path: "/goals",
    name: "Goals",
    icon: "nc-icon nc-pin-3",
    component: Goals,
    layout: "/admin",
  },
  {
    path: "/news",
    name: "News Feed",
    icon: "nc-icon nc-atom",
    component: NewsFeed,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
