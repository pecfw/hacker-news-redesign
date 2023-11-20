'use client';
import { useEffect, useContext } from 'react';
import ArticleList from '../components/articleList';
import { ArticleType } from '../types';
import { StarredContext } from '../providers/starredProvider';

export default function StarredPage() {
  const { starredArticles, updateArray } = useContext(StarredContext);

  useEffect(() => {
    const favourites = localStorage.getItem('starredArticles');
    const favList: ArticleType[] = favourites && JSON.parse(favourites);
    updateArray(favList);
  }, []);
  return <ArticleList articles={starredArticles} />;
}
