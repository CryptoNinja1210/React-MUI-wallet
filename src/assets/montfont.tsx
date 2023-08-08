import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('./fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: 'Montserrat-Bold';
    src: url('./fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;
 function MontFont() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}
 export default MontFont;