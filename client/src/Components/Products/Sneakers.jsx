import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSneakers } from '../../store/Actions/FetchSneakers/FetchSneakers';
import { FetchProductByID } from '../../store/Actions/FetchProducByID/FetchProductByID';
import { useHistory } from 'react-router-dom';
import '../../styles/Products.scss';

export const Sneakers = () => {
  const dispatch = useDispatch();
  const { loading, error, sneakersList } = useSelector(
    (state) => state.sneakers
  );
  const history = useHistory();
  useEffect(() => {
    dispatch(FetchSneakers());
  }, [dispatch]);

  const redirectToProductDetailsPage = (ID) => {
    // dispatch(FetchProductByID(ID));
    history.push(`/product-detail/${ID}`);
  };

  return (
    <div className="Products">
      <div className="Products__header">
        <h1 className="products__category">Sneakers</h1>
      </div>
      {loading ? (
        <h4 className="Loader">Fetching all Sneakers...</h4>
      ) : error ? (
        <h4>Network Error Fail to Fetch Jeans :'(</h4>
      ) : (
        <div className="Product__details">
          {sneakersList && sneakersList.products && (
            <div className="details__container">
              {sneakersList.products.map((product) => {
                return (
                  <div className="details" key={product.id}>
                    <div className="details__image">
                      <img
                        src={product.images[0].src}
                        alt=""
                        onClick={() => redirectToProductDetailsPage(product.id)}
                      />
                    </div>
                    <div className="details__description">
                      <h4>{product.handle}</h4>
                      <h4>{`Price: R${product.variants[0].price}`}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
