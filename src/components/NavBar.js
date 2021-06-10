import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
    let { books } = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading List</h1>
            <p>Currently you have { books.length } book to get through...</p>
        </div>
    );
}
 
export default NavBar;
