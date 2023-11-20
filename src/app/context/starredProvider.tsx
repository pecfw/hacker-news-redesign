import { createContext, useState, ReactNode } from 'react';
import { ArticleType } from '../types/articleType';

interface StarredContextType {
  starredArticles: ArticleType[];
  updateArray: (newArray: ArticleType[]) => void;
}

export const StarredContext = createContext<StarredContextType>({
  starredArticles: [],
  updateArray: () => {}
});

export const StarredProvider = ({ children }: { children: ReactNode }) => {
  const [starredArticles, setStarredArticles] = useState<ArticleType[]>([]);

  const updateArray = (newArray: ArticleType[]) => {
    setStarredArticles(newArray);
  };

  return (
    <StarredContext.Provider value={{ starredArticles, updateArray }}>
      {children}
    </StarredContext.Provider>
  );
};
