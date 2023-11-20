'use client';
import { useEffect, useState, useContext } from 'react';
import ArticleList from './components/articleList';
import { fetchArticleData } from './api/api';
import { ArticleType } from './types/articleType';
import { StarredContext } from './context/starredProvider';

const Home = () => {
  const { updateArray } = useContext(StarredContext);
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

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localStarredArticles = localStorage.getItem('starredArticles');
      const localStarredArticlesList: ArticleType[] =
        localStarredArticles && JSON.parse(localStarredArticles);
      updateArray(localStarredArticlesList);
    }
  }, []);

  return <ArticleList articles={latestArticles} />;
};

export default Home;
