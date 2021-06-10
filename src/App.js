import React from 'react';
import BookkForm from './components/BookForm';
import BookList from './components/BookList';
import NavBar from "./components/NavBar";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookkForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
