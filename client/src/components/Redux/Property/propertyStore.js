import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "./propertySlice";

const propertyStore = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

export default propertyStore;
