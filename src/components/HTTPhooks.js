import React, { useState, useEffect } from "react";
import axios from "axios";

function HTTPhooks() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [postMessage, setPostMessage] = useState(null);

  const postToApi = () => {
    console.log("It works");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Hello world!",
        body: "It works!",
        userId: 123,
      })
      .then((response) => {
        // response.states === 201 ---> Dit betekent dat de post succesvol de server ingestuurd is
        setPostMessage(response.status === 201 ? 
            `Success! Title: ${response.data.title}` : 'Failed');
      });
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        setPosts(
          Array.isArray(response.data) ? response.data : [response.data]
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <button onClick={postToApi}>Create Post</button>
      <p>{postMessage}</p>
      <h2>Posts:</h2>
      {posts.length ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2>
              {post.id}, {post.title}
            </h2>
            <h4>By User ID: {post.userId}</h4>
            <p>{post.body}</p>
            <br />
          </div>
        ))
      ) : error ? (
        <p>{error}</p>
      ) : (
        <h4>Loading posts...</h4>
      )}
    </div>
  );
}

export default HTTPhooks;
