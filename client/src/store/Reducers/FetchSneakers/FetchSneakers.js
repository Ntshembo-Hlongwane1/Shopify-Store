import {
  FETCH_SNEAKERS_FAIL,
  FETCH_SNEAKERS_REQUEST,
  FETCH_SNEAKERS_SUCCESS
} from '../../Actions/FetchSneakers/action';

export const FetchSneakersReducer = (state = { sneakersList: [] }, action) => {
  switch (action.type) {
    case FETCH_SNEAKERS_REQUEST:
      return { loading: true };
    case FETCH_SNEAKERS_SUCCESS:
      return { loading: false, sneakersList: action.payload };
    case FETCH_SNEAKERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
