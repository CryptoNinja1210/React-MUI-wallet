import { createGlobalStyle } from 'styled-components';

 const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('./fonts/Montserrat-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
   @font-face {
    font-family: 'Montserrat-Bold';
    src: url('./fonts/Montserrat-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat-Light';
    src: url('./fonts/Montserrat-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat-Medium';
    src: url('./fonts/Montserrat-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat-SemiBold';
    src: url('./fonts/Montserrat-SemiBold.ttf') format('truetype');
    font-weight: 600;
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