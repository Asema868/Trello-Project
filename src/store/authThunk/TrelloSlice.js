import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",
  initialState: {
    trelo: [],
  },
  reducers: {
    addList: (state, action) => {
      state.trelo.push(action.payload);
    },
    deleteList: (state, action) => {
      state.trelo = state.trelo.filter((item) => item.id !== action.payload);
    },
    addCart: (state, action) => {
      state.trelo.map((item) => {
        if (item.id === action.payload.prid) {
          item.newTrello.push(action.payload);
        }
      });
    },
  },
});
export const { addList, addCart, deleteList } = trelloSlice.actions;
export const trelloReducer = trelloSlice.reducer;
