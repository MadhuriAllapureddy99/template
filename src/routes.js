// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import RoomAvailability from "layouts/roomAvailability";
import Icon from "@mui/material/Icon";
import Tables from "layouts/tables";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Guest Onboarding",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Room Availability",
    key: "availability",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/availability",
    component: <RoomAvailability/>,
  },
  
  {
    type: "collapse",
    name: "Notice List",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Tables/>,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "notifications",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },

  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
