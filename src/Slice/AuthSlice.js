import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(sessionStorage.getItem("user")) || null,
  isAuthenticated:
    JSON.parse(sessionStorage.getItem("isAuthenticated")) || false,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signUP: (state, action) => {
      const existingUser = JSON.parse(sessionStorage.getItem("user"));

      if (existingUser && existingUser.email === action.payload.email) {
        return;
      }

      state.user = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
    },

    login: (state, action) => {
      const storedUser = JSON.parse(sessionStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === action.payload.email &&
        storedUser.password === action.payload.password
      ) {
        state.isAuthenticated = true;
        sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
      } else {
        alert("Invalid credentials or user not found!");
      }
    },

    logout: (state) => {
      state.isAuthenticated = false;
      sessionStorage.removeItem("isAuthenticated");
    },
  },
});

export const { signUP, login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
