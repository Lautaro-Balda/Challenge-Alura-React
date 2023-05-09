import { createGlobalStyle } from "styled-components";
import { colorDeFondo } from "./components/UI/variables";
const GlobalStyle = createGlobalStyle`
:root{
    font-size: 20px;
}

body {
  overflow-x: hidden;
  background-color: ${colorDeFondo};
}
`
export default GlobalStyle