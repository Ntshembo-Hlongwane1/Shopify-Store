import {
  FETCH_SNEAKERS_FAIL,
  FETCH_SNEAKERS_REQUEST,
  FETCH_SNEAKERS_SUCCESS
} from './action';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_ShopifyDomain,
  storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
});

//SneakerID --> Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNTc3MDU3NzA1OQ==
export const FetchSneakers = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_SNEAKERS_REQUEST });
    const products = await client.collection.fetchWithProducts(
      process.env.REACT_APP_ShopifySneakerCollection_ID
    );
    dispatch({ type: FETCH_SNEAKERS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_SNEAKERS_FAIL, payload: error });
  }
};
