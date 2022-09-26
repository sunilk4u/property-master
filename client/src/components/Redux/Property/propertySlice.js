import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: [],
  reducers: {},
});

export const {emp} = propertySlice.actions;

export default propertySlice.reducer;
