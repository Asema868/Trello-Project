import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/header");

      return data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      navigate("/header");

      return data;
    } catch (error) {
      return rejectWithValue;
    }
  }
);
