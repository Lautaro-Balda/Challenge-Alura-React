import { createGlobalStyle } from "styled-components";
import { colorDeFondo } from "./components/UI/variables";
const GlobalStyle = createGlobalStyle`
:root{
    font-size: 20px;
}

body {
  background-color: ${colorDeFondo};
}
`
export default GlobalStyle