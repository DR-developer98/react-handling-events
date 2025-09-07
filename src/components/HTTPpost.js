import React, { Component } from "react";
import axios from "axios";

export class HTTPpost extends Component {
  constructor(props) {
    super(props);

    this.state = {
        apiResponse: null,
    };
  }

  postToApi = () => {
    console.log("It works");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works!",
        userId: 123,
      })
      .then((response) => console.log(response));
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
        this.setState({
            apiResponse: response.data,
        })
    });
  }

  render() {
    // Hier zijn we de apiResponse state aan het destructureren.
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>Create Post</button>
        {apiResponse ? 
        (
            <div>
                <h1>{apiResponse.title}</h1>
                <p>postId: {apiResponse.id}</p>
                <p>{apiResponse.body}</p>
                <p>userId: {apiResponse.userId}</p>
            </div>
        ) : (<p>Please click the button above</p>)
        }
      </div>
    );
  }
}

export default HTTPpost;
