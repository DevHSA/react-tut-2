import React, { useState } from "react";

export const FavContext = React.createContext({
  products: [],
  updateFavorite: (productId) => {},
});

const initialValue = [
  {
    id: "p1",
    title: "Red Scarf",
    description: "A pretty red scarf.",
    isFavorite: false,
  },
  {
    id: "p2",
    title: "Blue T-Shirt",
    description: "A pretty blue t-shirt.",
    isFavorite: false,
  },
  {
    id: "p3",
    title: "Green Trousers",
    description: "A pair of lightly green trousers.",
    isFavorite: false,
  },
  {
    id: "p4",
    title: "Orange Hat",
    description: "Street style! An orange hat.",
    isFavorite: false,
  },
];

const FavProvider = (props) => {
  const [productState, setProductState] = useState(initialValue);
  console.log("productState", productState)

  const updateFavoriteHandler = (productId) => {
    console.log(productId);
    setProductState((prevState) => {

      const prodIndex = prevState.findIndex((p) => p.id === productId);
      console.log(prodIndex)
      const newFavStatus = !prevState[prodIndex].isFavorite;
      const updatedProducts = [...prevState];
      updatedProducts[prodIndex] = {
        ...prevState[prodIndex],
        isFavorite: newFavStatus,
      };

      console.log("Updated",updatedProducts);
      return updatedProducts;
    });
  };

  return (
    <FavContext.Provider
      value={{ products: productState, updateFavorite: updateFavoriteHandler }}
    >
      {props.children}
    </FavContext.Provider>
  );
};

export default FavProvider;
