import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer'

export let BookContext = createContext();

const BookContextProvider = (props) => {
    // let [ books, setBooks ] = useState([
    //     { title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    //     { title: 'the final empire', author: 'brandon sanderson', id: 2},
    //     { title: 'the ramayan', author: 'valmiki', id: 3}
    // ]);
    // let addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: books.length + 1}]);
    // };
    // let removeBook = (id) => {
    //     setBooks(books.filter(book => book.id !== id));
    // };
    
    
    let [ books, dispatch ] = useReducer(bookReducer, [
        { title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        { title: 'the final empire', author: 'brandon sanderson', id: 2},
        { title: 'the ramayan', author: 'valmiki', id: 3}
        ], () => {
            let localData = localStorage.getItem('books');
            return localData ? JSON.parse(localData) : []
        });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    return ( 
        // <BookContext.Provider value={{books, addBook, removeBook}}>
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;