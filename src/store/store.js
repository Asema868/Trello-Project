import { configureStore, createSlice } from "@reduxjs/toolkit";
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("boardState");
    return serializedState ? JSON.parse(serializedState) : { lists: [] };
  } catch (error) {
    console.error("Ошибка загрузки данных из localStorage", error);
    return { lists: [] };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("boardState", serializedState);
  } catch (error) {
    console.error("Ошибка сохранения данных в localStorage", error);
  }
};

const initialState = loadState();

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { listId, text } = action.payload;
      const list = state.lists.find((l) => l.id === listId);
      if (list) {
        list.cards.push({ id: Date.now().toString(), text });
        saveState(state);
      }
    },
    addList: (state, action) => {
      const { title } = action.payload;
      state.lists.push({ id: Date.now().toString(), title, cards: [] });
      saveState(state);
    },
    archiveList: (state, action) => {
      const { listId } = action.payload;
      state.lists = state.lists.filter((list) => list.id !== listId);
      saveState(state);
    },
    duplicateList: (state, action) => {
      const { listId } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        state.lists.push({
          ...list,
          id: Date.now().toString(),
          title: `${list.title} (Копия)`,
        });
        saveState(state);
      }
    },
    editList: (state, action) => {
      const { listId, title } = action.payload;
      const list = state.lists.find((list) => list.id === listId);
      if (list) {
        list.title = title;
        saveState(state);
      }
    },
  },
});

export const { addCard, addList, archiveList, duplicateList, editList } =
  boardSlice.actions;

export const store = configureStore({ reducer: { board: boardSlice.reducer } });
