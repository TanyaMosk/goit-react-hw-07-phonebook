import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
body {  
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  width: 400px;
  margin: auto;    
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  background-attachment: fixed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

div{
  margin: auto; 
}
`;