import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchHoodies } from '../../store/Actions/FetchHoodies/FetchHoodies';
import '../../styles/Products.scss';

export const Hoodies = () => {
  const dispatch = useDispatch();
  const { loading, error, hoodiesList } = useSelector((state) => state.hoodies);

  useEffect(() => {
    dispatch(FetchHoodies());
  }, [dispatch]);
  return (
    <div className="Products">
      <div className="Products__header">
        <h1 className="products__category">Hoodies</h1>
      </div>
      {loading ? (
        <h4 className="Loader">Fetching all hoodies...</h4>
      ) : error ? (
        <h4>Network Error Fail to Fetch Hoodies :'(</h4>
      ) : (
        <div className="Product__details">
          {hoodiesList && hoodiesList.products && (
            <div className="details__container">
              {hoodiesList.products.map((product) => {
                return (
                  <div className="details" key={product.id}>
                    <div className="details__image">
                      <img src={product.images[0].src} alt="" />
                    </div>
                    <div className="details__description">
                      <h4>{product.descriptionHtml}</h4>
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
