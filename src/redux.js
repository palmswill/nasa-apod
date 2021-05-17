import { createStore } from 'redux';

const initialState = {
  date:new Date(),
  favorite:JSON.parse(localStorage.getItem("favorite")) || []
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_PHOTO':
        localStorage.setItem("favorite", JSON.stringify(
             [...state.favorite,action.payload]
          ));
      return {
        ...state,
        favorite: [...state.favorite,action.payload]
      };
    case 'CHANGE_DATE':
      return {
        ...state,
        date: action.payload
      };
      case 'DELETE_PHOTO':
        return {
          ...state,
          favorite: []
        };
    default:
      return state;
  }
}
// Actions
export const addPhotoAction = (url) => ({
  type: 'ADD_PHOTO',
  payload:url
});

export const deletePhotoAction = (index) => ({
  type: 'DELETE_PHOTO',
  payload:index,
});

export const changeDateAction = (date) => ({
  type: 'CHANGE_DATE',
  payload: date
});