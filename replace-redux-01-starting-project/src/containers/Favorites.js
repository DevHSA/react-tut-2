import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import {FavContext} from '../components/ContextStore/fav-context'
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = props => {

  const ctx = useContext(FavContext);

  const favoriteProducts = ctx.products.filter(p => p.isFavorite)
  
    

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(prod => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
