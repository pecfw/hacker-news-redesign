import { FC } from 'react';
import Image from 'next/image';
import { ArticleType } from '@/app/types/articleType';
import starUnfilled from '../../images/star-unfilled.svg';
import starFilled from '../../images/star-filled.svg';
import starUnfilledDark from '../../images/star-unfilled-dark.svg';

const StarImage: FC<{
  isFilled: boolean;
  isDarkMode: boolean;
  article: ArticleType;
  onStarClick: (isStarred: boolean, article: ArticleType) => void;
  styles: any;
}> = ({ isFilled, isDarkMode, article, onStarClick, styles }) => (
  <a
    className={styles.article_list__paragraph__star}
    onClick={() => onStarClick(isFilled, article)}
  >
    <Image
      className={styles.article_list__paragraph__star__image}
      src={isFilled ? starFilled : isDarkMode ? starUnfilledDark : starUnfilled}
      alt="star filled"
      priority
    />
    <span>{isFilled ? 'saved' : 'save'}</span>
  </a>
);

export default StarImage;
