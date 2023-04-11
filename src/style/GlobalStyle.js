import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { variables } from './variables';
// import { mediaQueries } from './mediaQueries';

export const GlobalStyle = createGlobalStyle`

${variables}

body {
  margin: 0;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
    letter-spacing: -0.02em;
    color: ${({ theme: { colors } }) => colors.txt};
    background-color: ${({ theme: { colors } }) => colors.bg};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}
img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}
`;

//пример использования внутри styled-components

// ${mediaQueries('desktop')`
// flex-direction: ....;
// align-items: ....;
//   `};
