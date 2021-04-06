import React from "react";

import Card from "../../components/card/card.component";

import "./posts.styles.css";

const Posts = () => {
  return (
    <>
      <div className="title">
        <h1>Sample Blog Page</h1>
      </div>
      <div className="card-container">
        <Card />
      </div>
    </>
  );
};

export default Posts;
