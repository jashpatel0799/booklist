import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    let { books } = useContext(BookContext)
    return books.length ? (
       <div className="book-list">
           <ul>
               { books.map( book => {
                   return (<li key={book.id}><BookDetails book={book} /></li>)
               }) }
           </ul>
       </div>
    ) : (
        <div className="empty">
            No books to ReadableStream. Hello Free time :)
        </div>
    );
}
 
export default BookList;