import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Syne';
    src: url('./fonts/Syne-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
   @font-face {
    font-family: 'Syne-Bold';
    src: url('./fonts/Syne-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
`;
 function SyneFont() {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
}
 export default SyneFont;