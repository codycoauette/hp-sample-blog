import React from "react";
import axios from "axios";

import "./card.styles.css";

export default class Card extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("https://hp-sample-blog.herokuapp.com/posts").then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
          <div className="card">
            <img src={post.image_url} alt="cardImage" />
            <div className="card-title">{post.title}</div>
            <div className="card-desc">{post.description}</div>
          </div>
        ))}
      </div>
    );
  }
}
