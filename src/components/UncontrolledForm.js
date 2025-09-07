import React, { Component } from "react";

export class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputName = React.createRef();
    this.selectCategory = React.createRef();
    this.inputComment = React.createRef();
  }

  handleSubmission = (event) => {
    event.preventDefault();
    console.log(this.inputName.current.value);
    console.log(this.selectCategory.current.value);
    console.log(this.inputComment.current.value);
  }

  render() {
    return (
      <div>
        <h2>Please fill out the form below: </h2>
        <form onSubmit={this.handleSubmission}>
          <div>
            <label htmlFor="id-name">Your name: </label>
            <input
              id="id-name"
              name="name"
              type="text"
              ref={this.inputName}
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category: </label>
            <select name="category" id="id-category" ref={this.selectCategory}>
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General enquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments</label>
            <textarea name="comments" id="id-comments" ref={this.inputComment}/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;
