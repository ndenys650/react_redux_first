import { combineReducers } from 'redux';
// import books reducer
import BooksReducer from './reducer_books';
// import activebook
import ActiveBook from './reducer_active_book';

// create map for imported books reducer
const rootReducer = combineReducers({
  // any key to the object that we provide to the combineReducers
  // ends up as a key on the Global State
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
