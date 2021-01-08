import Client from 'shopify-buy';
import {
  FETCH_HOODIES_FAIL,
  FETCH_HOODIES_REQUEST,
  FETCH_HOODIES_SUCCESS
} from './actions';

const client = Client.buildClient({
  domain: process.env.REACT_APP_ShopifyDomain,
  storefrontAccessToken: process.env.REACT_APP_StoreAccessToken
});

//HoodiesID --> Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNTc2OTEwMjQ5OQ==
export const FetchHoodies = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_HOODIES_REQUEST });
    const products = await client.collection.fetchWithProducts(
      process.env.REACT_APP_ShopifyHoodieCollection_ID
    );
    dispatch({ type: FETCH_HOODIES_SUCCESS, payload: products });
  } catch (error) {
    dispatch({ type: FETCH_HOODIES_FAIL, payload: error });
  }
};
