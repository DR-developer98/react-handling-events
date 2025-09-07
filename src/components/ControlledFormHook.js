import React, { useState } from "react";

function ControlledFormHook() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("website");
  const [comment, setComment] = useState('');
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(name, category, comment);
  }

  return (
    <div>
      <h2>Please fill out the form below: </h2>
      <form onSubmit={handleSubmission}>
        <div>
          <label htmlFor="id-name">Your name: </label>
          <input
            onChange={
                (e) => setName(e.target.value)
            }
            value={name}
            id="id-name"
            name="name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="id-category">Query category: </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            id="id-category"
          >
            <option value="website">Website issue</option>
            <option value="order">Order issue</option>
            <option value="general">General enquiry</option>
          </select>
        </div>
        <div>
          <label htmlFor="id-comments">Comments</label>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            name="comments"
            id="id-comments"
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ControlledFormHook;
