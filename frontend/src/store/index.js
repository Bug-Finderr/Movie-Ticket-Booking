import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
<<<<<<< HEAD
  name: "user",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("userId");
      state.isLoggedIn = false;
    },
  },
});

const adminSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("adminId");
      localStorage.removeItem("token");
      state.isLoggedIn = false;
    },
  },
=======
    name: "user",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
        state.isLoggedIn = true;
        },
        logout(state) {
        localStorage.removeItem("userId");
        state.isLoggedIn = false;
        },
    },
});

const adminSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
        state.isLoggedIn = true;
        },
        logout(state) {
        localStorage.removeItem("adminId");
        localStorage.removeItem("token");
        state.isLoggedIn = false;
        },
    },
>>>>>>> 957dc3a237942908659a8045ef0ecbf489ce6271
});

export const userActions = userSlice.actions;
export const adminActions = adminSlice.actions;

export const store = configureStore({
<<<<<<< HEAD
  reducer: {
    user: userSlice.reducer,
    admin: adminSlice.reducer,
  },
});
=======
    reducer: {
        user: userSlice.reducer,
        admin: adminSlice.reducer,
    },
});
>>>>>>> 957dc3a237942908659a8045ef0ecbf489ce6271
