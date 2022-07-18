import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  n_id: 1,
  login: false,
  apiUrl:"http://127.0.0.1:8000/api/"
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data=action.payload
    },
    addUser: (state, action) => {},
    resertUser: (state, action) => {
      let { id_user } = action.payload;
      let new_data = state.data.filter((el) => {
        return id_user != el.id;
      });
      state.data = new_data;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { setUser, addUser, resertUser, setLogin } = userSlice.actions;

export default userSlice.reducer;