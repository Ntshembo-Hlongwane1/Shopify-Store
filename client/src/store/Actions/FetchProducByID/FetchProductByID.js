import {
  FETCH_PRODUCT_BY_ID_FAIL,
  FETCH_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_BY_ID_SUCCESS
} from './actions';

import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_ShopifyDomain,
  storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
});

export const FetchProductByID = (productID) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PRODUCT_BY_ID_REQUEST });
    const product = await client.product.fetch(productID);
    localStorage.setItem('productDetails', JSON.stringify(product));
    dispatch({ type: FETCH_PRODUCT_BY_ID_SUCCESS, payload: product });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCT_BY_ID_FAIL, payload: error });
  }
};
