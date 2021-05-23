import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="1"
          title='Book 1'
          price={6}
          description='This is a first product - amazing!'
        />
        <ProductItem
          id="2"
          title='Book 2'
          price={4}
          description='This is a Second product - amazing!'
        />
        
      </ul>
    </section>
  );
};

export default Products;
