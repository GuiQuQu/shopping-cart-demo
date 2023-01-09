import React, { useEffect } from 'react';
import * as S from "./style";
import useProducts from './../../contexts/product-context/useProducts';
import Filter from '../Filter';
import Products from '../Products';
import Cart from "../Cart";
import Loader from '../Loader';

const App: React.FC = () => {
  const { isFetching, products, fetchpProducts } = useProducts();

  useEffect(() => {
    fetchpProducts();
  }, [fetchpProducts]);
  return (
    <S.Container>
      {isFetching && <Loader />}
      <S.TwoColumnFlex>
        <S.SideContainer>
          <Filter />
        </S.SideContainer>
        <S.MainContainer>
          <S.MainHeader>
            发现了{products.length}件商品
          </S.MainHeader>
          <Products products={products} />
        </S.MainContainer>
      </S.TwoColumnFlex>
      <Cart /> 
    </S.Container>
  );
}

export default App;
