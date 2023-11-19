'use client';
import { useEffect, useState } from 'react';
import ArticleList from '../components/articleList';
import { ArticleType } from '../types';

export default function StarredPage() {
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
  return (
      <ArticleList
        articles={starredArticles}
        onStarClick={onStarClick}
        starredArticles={starredArticles}
      />
  );
}
