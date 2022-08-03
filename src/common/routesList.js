import {
  faHouse,
  faUsers,
  faList,
  faCalendarCheck,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import EventCategoriesList from "../pages/EventCategories/EventCategoriesList/EventCategoriesList";
import CreateUpdateEventCategory from "../pages/EventCategories/CreateUpdateEventCategory/CreateUpdateEventCategory";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";
import EventTypesList from "../pages/EventTypes/EventTypesList/EventTypesList";
import CreateUpdateEventType from "../pages/EventTypes/CreateUpdateEventType/CreateUpdateEventType";
import LocationsList from "../pages/Locations/LocationsList/LocationsList";
import CreateUpdateLocation from "../pages/Locations/CreateUpdateLocation/CreateUpdateLocation";

export const getRoutes = (isAuthenticated) => [
  {
    name: isAuthenticated ? "Home" : "Login",
    path: "/",
    icon: faHouse,
    component: isAuthenticated ? Home : Login,
    exact: true,
  },
  {
    name: "Users",
    path: "/users",
    icon: faUsers,
    component: Users,
  },
  {
    name: "Event Categories",
    path: "/event-categories",
    icon: faList,
    component: EventCategoriesList,
  },
  {
    name: "Add Event Category",
    path: "/add-event-category",
    component: CreateUpdateEventCategory,
    hideFromMenu: true,
  },
  {
    name: "Event Category Details",
    path: "/event-categories/:categoryId",
    component: CreateUpdateEventCategory,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "event-categories",
  },
  {
    name: "Event Types",
    path: "/event-types",
    icon: faCalendarCheck,
    component: EventTypesList,
  },
  {
    name: "Add Event Type",
    path: "/add-event-type",
    hideFromMenu: true,
    component: CreateUpdateEventType,
  },
  {
    name: "Event Type Details",
    path: "/event-types/:eventTypeId",
    component: CreateUpdateEventType,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "event-types",
  },
  {
    name: "Locations",
    path: "/locations",
    component: LocationsList,
    icon: faLocationDot,
  },
  {
    name: "Add Location",
    path: "/add-location",
    component: CreateUpdateLocation,
    hideFromMenu: true,
  },
  {
    name: "Location Details",
    path: "/locations/:locationId",
    component: CreateUpdateLocation,
    hideFromMenu: true,
    pageLevel: 2,
    rootPage: "locations",
  },
];

export default getRoutes;
