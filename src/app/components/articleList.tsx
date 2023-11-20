import React, { useContext, FC } from 'react';
import Image from 'next/image';
import { Ubuntu_Mono } from 'next/font/google';
import { ArticleType } from '../types';
import starUnfilled from '../images/star-unfilled.svg';
import starFilled from '../images/star-filled.svg';
import styles from '../styles/components/articleList.module.scss';
import { StarredContext } from '../providers/starredProvider';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

const ArticleList: FC<{ articles: ArticleType[] }> = ({ articles }) => {
  const formattedUrl = (url: string) =>
    url && `(${new URL(url).hostname.replace('www.', '')})`;

  const formattedTime = (time: number) => {
    const numberOfHours = Math.floor(
      (Date.now() - new Date(time * 1000).getTime()) / 1000 / 60 / 60
    );
    return `${numberOfHours} ${numberOfHours > 1 ? 'hours' : 'hour'} ago`;
  };

  const StarImage: FC<{
    isFilled: boolean;
    article: ArticleType;
  }> = ({ isFilled, article }) => (
    <a
      className={styles.article_list__paragraph__star}
      onClick={() => onStarClick(isFilled, article)}
    >
      <Image
        className={styles.article_list__paragraph__star__image}
        src={isFilled ? starFilled : starUnfilled}
        alt="star filled"
        priority
      />
      <span>{isFilled ? 'saved' : 'save'}</span>
    </a>
  );
  const favourites = localStorage.getItem('starredArticles');
  const favList: ArticleType[] = favourites && JSON.parse(favourites);
  const { starredArticles, updateArray } = useContext(StarredContext);

  const onStarClick = (isStarred: boolean, article: ArticleType) => {
    if (isStarred) {
      const newList = favList.filter(
        ({ id: favArticleId }) => favArticleId !== article.id
      );
      localStorage.setItem('starredArticles', JSON.stringify(newList));
      updateArray(newList);
    } else {
      const newList = favList !== null ? [...favList, article] : [article];

      localStorage.setItem('starredArticles', JSON.stringify(newList));
      updateArray(newList);
    }
  };

  return (
    <div className={styles.article_list}>
      <ol>
        {articles.map((article) => (
          <li key={article.id}>
            <a
              href={article.url}
              className={styles.article_list__card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={ubuntuMono.className}>{article.title}</h2>
              <p>{formattedUrl(article.url)}</p>
            </a>
            <p className={styles.article_list__paragraph}>
              {article.score} points by {article.by}{' '}
              {formattedTime(article.time)} | {article.descendants} comments |{' '}
              {starredArticles &&
              starredArticles.some((item) => item.id === article.id) ? (
                <StarImage isFilled={true} article={article} />
              ) : (
                <StarImage isFilled={false} article={article} />
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
