import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background: #F9F9F9;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::-webkit-scrollbar {
  width: 0px;              
}

  ::-webkit-scrollbar-track {
    background: transparent;        
  }

  ::-webkit-scrollbar-thumb {
    background-color: black;    
    border-radius: 20px;     
  }
`;

