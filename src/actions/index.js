export function selectBook(book) {
	// return an action thats usable by different containers
	// selectBook is an ActionCreator, it needs to return an action
	// an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
