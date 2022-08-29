import { createSlice, configureStore } from "@reduxjs/toolkit";

// const ADD_ITEM = "ADD_ITEM";
// const DELETE_ITEM = "DELETE_ITEM";

// export function reducer(state = [], action) {
//   switch (action.type) {
//     case ADD_ITEM:
//       let temp = [...state];
//       temp.push(action.body);
//       return temp;
//     case DELETE_ITEM:
//       return [...state].filter((ele) => ele.body !== action.body);
//     default:
//       return [...state];
//   }
// }

const useToolkit = createSlice({
  name: "memo",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action);
    },
  },
});

export const store = configureStore({
  reducer: useToolkit.reducer,
});

export default useToolkit.reducer;
export const memoActions = useToolkit.actions;
