import React, { useState } from 'react';
import Image from 'next/image';
import { Ubuntu_Mono } from 'next/font/google';
import styles from '../page.module.css';
import { ArticleType } from '../types';
import starUnfilled from '../images/star-unfilled.svg';
import starFilled from '../images/star-filled.svg';

const ubuntuMono = Ubuntu_Mono({ weight: '700', subsets: ['latin'] });

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

  return (
    <div className={styles.grid}>
      <ol>
        {articles.map((article) => (
          <li key={article.id}>
            <a
              href={article.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={ubuntuMono.className}>
                {article.title} {formattedUrl(article.url)}
              </h2>
            </a>
            <p>
              {article.score} points by {article.by} |{' '}
              {formattedTime(article.time)} | {article.descendants} comments |{' '}
              {starredArticles.some((item) => item.id === article.id) ? (
                <a onClick={() => onStarClick(true, article)}>
                  <Image src={starFilled} alt="star filled" priority />
                </a>
              ) : (
                <a onClick={() => onStarClick(false, article)}>
                  <Image src={starUnfilled} alt="star unfilled" priority />
                </a>
              )}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
