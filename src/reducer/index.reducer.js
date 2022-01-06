import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import services from "./servicesState";
import order from "./orderState";
import allOrder from "./allOrders";
import allOrders from './allSingleOrders'
const allReducer = combineReducers({
  users,
  services,
  order,
  allOrder,
  allOrders,
});

export default allReducer;
