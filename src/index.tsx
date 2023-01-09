import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import StyledThemeProvider from './commons/style/ThemeProvider';
import { theme } from "./commons/style/theme";
import GlobalStyle from './commons/style/global-style';
import { ProductsProvider } from './contexts/product-context';
import { CartProvider } from './contexts/cart-context/CarContextProvider';
import { CurrencyContextProvider } from './contexts/currencyProvider';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// React.StrictMode 在开发环境下会让有些重要的函数执行两遍以帮助发现副作用,在生成环境下无影响
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <StyledThemeProvider theme={theme}>
      <ProductsProvider> 
        <CartProvider>
          <CurrencyContextProvider>
            <App />
          </CurrencyContextProvider>
        </CartProvider>
      </ProductsProvider>
    </StyledThemeProvider>

  </React.StrictMode>
);

