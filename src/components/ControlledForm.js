import React, { Component } from "react";

export class ControlledForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      category: "website",
      comment: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCategorySelection = (event) => {
    this.setState({
      category: event.target.value,
    })
  }

  handleCommentEntering = (event) => {
    this.setState({
      comment: event.target.value,
    })
  }

  handleSubmission = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Please fill out the form below: </h2>
        <form onSubmit={this.handleSubmission}>
          <div>
            <label htmlFor="id-name">Your name: </label>
            <input
              onChange={this.handleNameChange}
              value={this.state.name}
              id="id-name"
              name="name"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="id-category">Query category: </label>
            <select onChange={this.handleCategorySelection} value={this.state.category} name="category" id="id-category">
              <option value="website">Website issue</option>
              <option value="order">Order issue</option>
              <option value="general">General enquiry</option>
            </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments</label>
            <textarea onChange={this.handleCommentEntering} value={this.state.comment} name="comments" id="id-comments" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ControlledForm;
