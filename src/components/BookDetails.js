import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    // let { removeBook } = useContext(BookContext);
    let { dispatch } = useContext(BookContext);
    return (
        // <div className="book-detail" onClick={ () => removeBook(book.id) }>
        <div className="book-detail" onClick={ () => dispatch({ type: "REMOVE_BOOK", id: book.id}) }>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </div>
    );
}
 
export default BookDetails;