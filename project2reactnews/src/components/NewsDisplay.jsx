import React, { useState } from 'react';

function NewsDisplay({ articles }) {
    const loaded = () => {
      return articles.map((article) => (
        <div className='new-display'>
          {articles ? loaded() : loading()}
        </div>
        <div key={article.url}>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.description}</p>
          <a href={article.url}>Read More</a>
        </div>
      ));
    };
    const loading = () => {
      return <h1>Loading...</h1>;
    };
    return <div>{articles ? loaded() : loading()}</div>;
  }
  
  export default NewsDisplay;
