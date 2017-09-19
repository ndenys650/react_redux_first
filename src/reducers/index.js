import { combineReducers } from 'redux';
// import books reducer
import BooksReducer from './reducer_books';

// create map for imported books reducer
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
