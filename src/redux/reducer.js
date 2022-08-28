const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export function reducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      let temp = [...state];
      temp.push(action.body);
      return temp;
    case DELETE_ITEM:
      return [...state].filter((ele) => ele.body !== action.body);
    default:
      return [...state];
  }
}
