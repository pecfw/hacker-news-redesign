'use client';
import { useEffect, useState } from 'react';
import ArticleList from './components/articleList';
import { fetchArticleData } from './helpers/fetchData';
import { ArticleType } from './types';

const Home = () => {
  const [latestArticles, setLatestArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      const response = await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json'
      );
      const data = await response.json();
      const top12Stories = data.slice(0, 12);

      const articlesData = await Promise.all(
        top12Stories.map((articleId: number) => fetchArticleData(articleId))
      );

      setLatestArticles(articlesData);
    };
    fetchLatestArticles();
  }, []);

  return <ArticleList articles={latestArticles} />;
};

export default Home;
