import React, { useState } from 'react';
import Image from 'next/image';
import { Ubuntu_Mono } from 'next/font/google';
import { ArticleType } from '../types';
import starUnfilled from '../images/star-unfilled.svg';
import starFilled from '../images/star-filled.svg';
import styles from '../styles/components/articleList.module.scss';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

const ArticleList: React.FC<{
  articles: ArticleType[];
  onStarClick: (isStarred: boolean, article: ArticleType) => void;
  starredArticles: ArticleType[];
}> = ({ articles, onStarClick, starredArticles }) => {
  const formattedUrl = (url: string) =>
    url && new URL(url).hostname.replace('www.', '');

  const formattedTime = (time: number) => {
    const numberOfHours = Math.floor(
      (Date.now() - new Date(time * 1000).getTime()) / 1000 / 60 / 60
    );
    return `${numberOfHours} ${numberOfHours > 1 ? 'hours' : 'hour'} ago`;
  };

  const starImage = (
    isFilled: boolean,
    article: ArticleType,
    imageSrc: string
  ) => (
    <a onClick={() => onStarClick(isFilled, article)}>
      <Image src={imageSrc} alt="star filled" priority />
    </a>
  );

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
              {starredArticles.some((item) => item.id === article.id)
                ? starImage(true, article, starFilled)
                : starImage(false, article, starUnfilled)}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
