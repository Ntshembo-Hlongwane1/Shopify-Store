import React, { useEffect, useState } from 'react';
import Client from 'shopify-buy';
import { useParams } from 'react-router-dom';
import '../../styles/ProductDetails.scss';

const client = Client.buildClient({
  domain: process.env.REACT_APP_ShopifyDomain,
  storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
});

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    client.product
      .fetch(id)
      .then((product) => {
        setProduct(product);
        // alert(JSON.stringify(product.images[0]));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [product]);

  if (product === null) {
    return <h2>Fetching product details...</h2>;
  } else {
    return (
      <div className="singleProduct__details">
        {product && (
          <div className="details__left">
            <div className="left__image">
              <img src={product.images[0].src} alt="" />
            </div>
            <div className="left__handle">
              <h4>{product.handle}</h4>
            </div>
          </div>
        )}
        {product && (
          <div className="details__right">
            <h3>Product Summary</h3>
            <h4>{`Total Price: R${product.variants[0].price}`}</h4>
            <button className="btn-add-to-cart">Add To Cart</button>
          </div>
        )}
      </div>
    );
  }
};
