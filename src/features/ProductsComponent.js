import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsFetch } from '../features/productsSlice';
import { ClipLoader } from 'react-spinners';

const ProductsComponent = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  console.log(status);
 // 왜 스피너 안 뜨냐..
  if (status === 'loading') return <ClipLoader size={100} color={"#123abc"} loading={true} />;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;
