import { createSlice } from "@reduxjs/toolkit";
interface UserSliceState {
  userChange: string;
  userLogin: string;
}

const initialState = {
  userChange: "",
  userLogin: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserChange: (state, action) => {
      state.userChange = action.payload;
    },
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserChange, setUserLogin } = userSlice.actions;

export default userSlice.reducer;

export type { UserSliceState };
