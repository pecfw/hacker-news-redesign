import { ArticleType } from '../types';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export const fetchArticleData = async (
  articleId: number
): Promise<ArticleType> =>
  await fetchData(
    `https://hacker-news.firebaseio.com/v0/item/${articleId}.json`
  );
