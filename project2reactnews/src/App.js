import { useState, useEffect } from "react";
import NewsDisplay from "./components/NewsDisplay";
import Form from "./components/Form";

import "./index.css";

function App() {
  const apiKey = "f5d44014fa3d4d1786244e80ac21cc48";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews("top-headlines");
  }, []);

  const getNews = async (category) => {
    const response = await fetch(
      `https://newsapi.org/v2/${category}?country=us&apiKey=${apiKey}`
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  const handleSearch = async (searchTerm) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
    );
    const data = await response.json();
    setArticles(data.articles);
  };

  return (
    <div className="App">
      <Form handleSearch={handleSearch} />
      <NewsDisplay articles={articles} />
    </div>
  );
}

export default App;



