import React, { useState } from "react";

const AllBooksContext = React.createContext()

const AllBooksProvider = ({children}) => {
  const [books, setBooks] = useState([])

  const completedBooks = books.filter((book) => book.done_reading === true)
  const wishListBooks = books.filter((book) => book.done_reading === false)

  return (
    <AllBooksContext.Provider
      value={{ books, setBooks, completedBooks, wishListBooks }}
    >
      {children}
    </AllBooksContext.Provider>
  )
}

export { AllBooksContext, AllBooksProvider }