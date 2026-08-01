import { createContext, useState } from 'react';

export const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const navigateTo = (page, productId = null, category = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
    setSelectedCategory(category);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        selectedProductId,
        selectedCategory,
        navigateTo,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
