import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

function App() {
  console.log(blogData)
  
  return (
    <div className="App">
      <Header 
        name={blogData.name}
       />
      <About 
        image={blogData.image}
        about={blogData.about}
       />
      <ArticleList />
    </div>
  );
}

export default App;
