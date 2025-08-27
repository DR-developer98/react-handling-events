import React from 'react';
import Book from './Book';

function RenderingLists() {
    const bookList = [
        "To kill a mocking bird", 
        "The great Gatsby",
        "The catcher in the rye"
    ]

    const books = [
    {
      title: "to kill a mockingbird",
      author: "harper lee",
      pages: 281,
    },
    {
      title: "the great gatsby",
      author: "f. scott fitzgerald",
      pages: 218,
    },
    {
      title: "the catcher in the rye",
      author: "j. d. salinger",
      pages: 234,
    },
  ];
  
  return (
    <div>
        {bookList.map(book => {
            return <h2 key={book}>{book}</h2>
        })}
        <br />
        {books.map(item => {
            return (
                <Book key={item.title} item = {item} />
            )
        })}
    </div>
  )
}

export default RenderingLists