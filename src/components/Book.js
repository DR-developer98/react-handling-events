import React from "react";

function Book(props) {
  return (
    <div>
      <h5>{props.item.title}</h5>
      <p>{props.item.author}</p>
      <p>{props.item.pages}</p>
    </div>
  );
}

export default Book;
