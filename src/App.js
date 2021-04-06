import React from "react";
import "./App.css";

import Header from "../src/components/header/header.component";
import Posts from "./pages/posts/posts";

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
