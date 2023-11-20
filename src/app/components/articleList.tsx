import React, { useContext, FC } from 'react';
import { Ubuntu_Mono } from 'next/font/google';
import { ArticleType } from '../types/articleType';
import styles from '../styles/components/articleList.module.scss';
import { StarredContext } from '../context/starredProvider';
import { ThemeContext } from '../context/themeProvider';
import StarImage from './elements/star';
import state_theme from '../styles/state.themes.module.scss';
import { formattedUrl, formattedTime } from '../utils/formatting';

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] });

const ArticleList: FC<{ articles: ArticleType[] }> = ({ articles }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { starredArticles, updateArray } = useContext(StarredContext);

  const onStarClick = (isStarred: boolean, article: ArticleType) => {
    if (isStarred) {
      const newList = starredArticles.filter(
        ({ id: starredArticleId }) => starredArticleId !== article.id
      );
      localStorage.setItem('starredArticles', JSON.stringify(newList));
      updateArray(newList);
    } else {
      const newList =
        starredArticles !== null ? [...starredArticles, article] : [article];

      localStorage.setItem('starredArticles', JSON.stringify(newList));
      updateArray(newList);
    }
  };

  return (
    <div
      className={`${styles.article_list}  ${
        isDarkMode ? state_theme.dark_theme : state_theme.light_theme
      }`}
    >
      <ol>
        {articles &&
          articles.map((article) => (
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
                  <StarImage
                    isFilled={true}
                    isDarkMode={isDarkMode}
                    article={article}
                    onStarClick={onStarClick}
                    styles={styles}
                  />
                ) : (
                  <StarImage
                    isFilled={false}
                    isDarkMode={isDarkMode}
                    article={article}
                    onStarClick={onStarClick}
                    styles={styles}
                  />
                )}
              </p>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ArticleList;
