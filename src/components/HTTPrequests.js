import React, { Component } from "react";
import axios from "axios";

export class HTTPrequests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response);
        this.setState({
          // 1. "response" is een heel uitgebreid JS-object.
          // Als je dit in de console bekijkt, dan krijg je meerdere properties te zien,
          // zoals config, status en data ---> Als je data openklapt, dan krijg je alle posts te zien.
          // Wij moeten ons dus toegang tot de "data"-property van het response object verschaffen;
          // daarom gebruiken we de dot-notatie =D
          //posts: response.data;

          // 2. Als er maar één post (dus één item) wordt geretourneerd, dan is dat geen Array van objecten
          // maar louter één enkel object. Objecten hebben geen ".length()" methode, wat dus betekent,
          // dat de ternary conditional in het return statement falsy zal zijn. Daarom gaat de weergave
          // in de Browser op "Loading posts..." blijven hangen.
          // Door middel van de Array.isArray(response.data)-methode, kunnen we nagaan of de uit de API
          // opgehaalde gegevens een Array zijn. Zo ja, dan wordt de state "posts" op "response.data" gezet;
          // zo niet, dan wordt van het enige geretourneerde object een "array" gemaakt, waar we wél de ".length()" methode
          //op kunnen gebruiken.
          posts: Array.isArray(response.data) ? response.data : [response.data],
        });
      })
      // .catch is een methode die specifiek voor de behandeling van error messages wordt gebruikt.
      // Net zoals de .then methode een "response"-object verwacht, verwacht de .catch-methode
      // het "error"-object.
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    const posts = this.state.posts;
    return (
      <div>
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
        ) : this.state.error ? (
          <p>{this.state.error}</p>
        ) : (
          <h4>Loading posts...</h4>
        )}
      </div>
    );
  }
}

export default HTTPrequests;
