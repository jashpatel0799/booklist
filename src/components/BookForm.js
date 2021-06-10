import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookkForm = () => {
    // let { addBook } = useContext(BookContext);
    let { dispatch } = useContext(BookContext)
    let [ title, setTitle ] = useState('');
    let [ author, setAuthor ] = useState('');
    let handleSubmit = (e) => {
        e.preventDefault();
        // addBook(title, author);
        dispatch({ type: 'ADD_BOOK', book: { title, author }});
        setTitle('');
        setAuthor('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} required/>
            <input type="submit" value="Add Book" />
        </form>
    );
}
 
export default BookkForm;