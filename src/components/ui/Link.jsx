import { useContext } from 'react';
import { NavigationContext } from '../../context/NavigationContext';

export default function Link({ to, onClick, children, ...props }) {
  const { navigateTo } = useContext(NavigationContext);

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    if (e.defaultPrevented) return;
    
    e.preventDefault();

    if (to === 'home') {
      navigateTo('home');
    } else if (to.startsWith('product:')) {
      const id = to.split(':')[1];
      navigateTo('product', id);
    } else if (to.startsWith('category:')) {
      const cat = to.split(':')[1];
      navigateTo('category', null, cat);
    }
  };

  return (
    <a href={to === 'home' || to === '/' ? '/' : `/${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
