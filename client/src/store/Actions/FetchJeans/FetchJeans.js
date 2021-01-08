import {
  FETCH_JEANS_FAIL,
  FETCH_JEANS_REQUEST,
  FETCH_JEANS_SUCCESS
} from './actions';
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_ShopifyDomain,
  storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
});

//JeansID --> Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNTc2OTg1NjE2Mw==

export const FetchJeans = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_JEANS_REQUEST });
    const products = await client.collection.fetchWithProducts(
      process.env.REACT_APP_ShopifyJeanCollection_ID
    );
    dispatch({ type: FETCH_JEANS_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_JEANS_FAIL, payload: error });
  }
};
