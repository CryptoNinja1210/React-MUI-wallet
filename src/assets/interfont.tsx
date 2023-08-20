import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../fonts/Inter-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: 'Inter-Bold';
    src: url('./fonts/Inter-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter-Medium';
    src: url('./fonts/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
 function InterFont() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}
 export default InterFont;