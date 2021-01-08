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
  const [Qty, setQty] = useState(1);

  const AddToCart = (variantID, qty) => {
    const checkoutID = localStorage.getItem('checkout');
    const lineItemsToAdd = [
      {
        variantId: variantID,
        quantity: qty
      }
    ];

    // Add an item to the checkout
    client.checkout
      .addLineItems(checkoutID, lineItemsToAdd)
      .then((checkout) => {
        // Do something with the updated checkout
        console.log(checkout.lineItems); // Array with one additional line item
      });
  };

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
            Qty
            <select value={Qty} onChange={(e) => setQty(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <button
              className="btn-add-to-cart"
              onClick={() => AddToCart(product.variants[0].id, Qty)}
            >
              Add To Cart
            </button>
          </div>
        )}
      </div>
    );
  }
};
