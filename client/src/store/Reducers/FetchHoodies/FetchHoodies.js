import {
  FETCH_HOODIES_FAIL,
  FETCH_HOODIES_REQUEST,
  FETCH_HOODIES_SUCCESS
} from '../../Actions/FetchHoodies/actions';

export const FetchHoodiesReducer = (state = { hoodiesList: [] }, action) => {
  switch (action.type) {
    case FETCH_HOODIES_REQUEST:
      return { loading: true };
    case FETCH_HOODIES_SUCCESS:
      return { loading: false, hoodiesList: action.payload };
    case FETCH_HOODIES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
