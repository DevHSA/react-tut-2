import React, {useContext} from 'react';
import { useSelector } from 'react-redux';
import {FavContext} from '../components/ContextStore/fav-context';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  const ctx = useContext(FavContext);

  const productList = ctx.products; 

  console.log("ParentProduct",productList)

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
