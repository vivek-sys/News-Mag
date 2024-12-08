
import React, { useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = React.useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
      
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    // Default image URL in case API doesn't return an image
    const defaultImage = "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"; // You can replace this with your preferred default image URL

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {/* {console.log("articles",articles.length)} */}
            
            {articles.map((news, index) => {
                return (
                    <NewsItem 
                        key={index}
                        title={news.title}
                        description={news.description ? news.description : "Top 100 Headlines"}
                        src={news.urlToImage ? news.urlToImage : defaultImage}  // If no image, use defaultImage
                        url={news.url}
                    />
                );
            })}
        </div>
    );
};

export default NewsBoard;
