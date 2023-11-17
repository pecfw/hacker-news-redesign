'use client';
import { useEffect, useState } from 'react';
import ArticleList from './components/articleList';
import { ArticleType } from './types';
import { fetchArticleData } from './helpers/fetchData';

export default function Home() {
  const [latestArticles, setLatestArticles] = useState<ArticleType[]>([]);
  const [starredArticles, setStarredArticles] = useState<ArticleType[]>([]);
  const onStarClick = (isStarred: boolean, article: ArticleType) => {
    const favourites = localStorage.getItem('starredArticles');
    const favList: ArticleType[] = favourites && JSON.parse(favourites);

    if (isStarred) {
      const newList = favList.filter(
        ({ id: favArticleId }) => favArticleId !== article.id
      );
      localStorage.setItem('starredArticles', JSON.stringify(newList));
      setStarredArticles(newList);
    } else {
      const newList = favList !== null ? [...favList, article] : [article];

      localStorage.setItem('starredArticles', JSON.stringify(newList));
      setStarredArticles(newList);
    }
  };

  useEffect(() => {
    const favourites = localStorage.getItem('starredArticles');
    const favList: ArticleType[] = favourites && JSON.parse(favourites);
    setStarredArticles(favList);
  }, []);

  useEffect(() => {
    const fetchLatestArticles = async () => {
      const response = await fetch(
        'https://hacker-news.firebaseio.com/v0/topstories.json'
      );
      const data = await response.json();
      const top6Stories = data.slice(0, 12);

      const articlesData = await Promise.all(
        top6Stories.map((articleId: number) => fetchArticleData(articleId))
      );

      setLatestArticles(articlesData);
    };
    fetchLatestArticles();
  }, []);

  return (
    <ArticleList
      articles={latestArticles}
      onStarClick={onStarClick}
      starredArticles={starredArticles}
    />
  );
}
