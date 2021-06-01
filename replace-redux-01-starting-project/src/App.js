import React from 'react';
import { Route } from 'react-router-dom';
import FavProvider from './components/ContextStore/fav-context'
import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const App = props => {
  return (
    <FavProvider>
      <Navigation />
      <main>
        <Route path="/" component={ProductsPage} exact />
        <Route path="/favorites" component={FavoritesPage} />
      </main>
    </FavProvider>
  );
};

export default App;
