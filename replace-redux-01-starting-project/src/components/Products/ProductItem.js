import React, {useContext} from 'react';
import { useDispatch } from 'react-redux';
import { FavContext} from '../ContextStore/fav-context'
import Card from '../UI/Card';
import './ProductItem.css';
import { toggleFav } from '../../store/actions/products';

const ProductItem = props => {

  const ctx = useContext(FavContext)
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {

    ctx.updateFavorite(props.id)
    // dispatch(toggleFav(props.id));
  };
  console.log("Props", props)

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
