'use client';
import { useEffect, useContext } from 'react';
import ArticleList from '../components/articleList';
import { ArticleType } from '../types/articleType';
import { StarredContext } from '../context/starredProvider';

export default function StarredPage() {
  const { starredArticles, updateArray } = useContext(StarredContext);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localStarredArticles = localStorage.getItem('starredArticles');
      const localStarredArticlesList: ArticleType[] =
        localStarredArticles && JSON.parse(localStarredArticles);
      updateArray(localStarredArticlesList);
    }
  }, []);

  return <ArticleList articles={starredArticles} />;
}
