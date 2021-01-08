import {
  FETCH_JEANS_FAIL,
  FETCH_JEANS_REQUEST,
  FETCH_JEANS_SUCCESS
} from '../../Actions/FetchJeans/actions';

export const FetchJeansReducer = (state = { jeansList: [] }, action) => {
  switch (action.type) {
    case FETCH_JEANS_REQUEST:
      return { loading: true };
    case FETCH_JEANS_SUCCESS:
      return { loading: false, jeansList: action.payload };
    case FETCH_JEANS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
