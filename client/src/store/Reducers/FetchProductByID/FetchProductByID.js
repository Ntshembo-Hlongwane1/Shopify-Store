import {
  FETCH_PRODUCT_BY_ID_FAIL,
  FETCH_PRODUCT_BY_ID_REQUEST,
  FETCH_PRODUCT_BY_ID_SUCCESS
} from '../../Actions/FetchProducByID/actions';

export const FetchProducByIDReducer = (
  state = { singleProduct: [] },
  action
) => {
  switch (action.types) {
    case FETCH_PRODUCT_BY_ID_REQUEST:
      return { loading: true };
    case FETCH_PRODUCT_BY_ID_SUCCESS:
      return { loading: false, singleProduct: action.payload };
    case FETCH_PRODUCT_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
