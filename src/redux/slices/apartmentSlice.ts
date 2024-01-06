import { createSlice } from "@reduxjs/toolkit";
import { IinitialState } from "../../types/interfaces";

const initialState: IinitialState = {
  apartments: [],
};

export const apartmentSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    apartmentsChanged(state, action) {
      state.apartments = action.payload;
    },
  },
});

export const { apartmentsChanged } = apartmentSlice.actions;

export default apartmentSlice.reducer;
