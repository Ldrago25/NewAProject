import { createSlice } from "@reduxjs/toolkit";
//import axios from "axios";

const initialState = {
  data: [],
  n_id: 1,
  login: false,
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {},
    addUser: (state, action) => {},
    resertUser: (state, action) => {
      let { id_user } = action.payload;
      let new_data = state.data.filter((el) => {
        return id_user != el.id;
      });
      state.data = new_data;
    },
    setLogin: (state, action) => {
      state.login = action.payload.state;
    },
  },
});

export const { setUser, addUser, resertUser, setLogin } = userSlice.actions;

export default userSlice.reducer;