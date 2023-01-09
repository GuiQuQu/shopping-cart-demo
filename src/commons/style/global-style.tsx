import { createGlobalStyle } from "styled-components";

// 利用createGlobalStyle创建全局样式,将该组件包裹全局app既可使用
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    font-smooth:always;
}
`;

export default GlobalStyle;