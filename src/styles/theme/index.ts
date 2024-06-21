interface Theme {
  colors: {
    primary: string,
    secondary: string,
    background: string,
    black: string,
    text: {
      white: string,
      black: string,
    },
  },
  fontSizes: {
    h1: string,
    h2: string,
    body: string,
    default: string,
  },
}

const theme: Theme = {
  colors: {
    primary: '#0F52BA',
    secondary: '#373737',
    background: '#F5F5F5',
    black: '#000',
    text: {
      white: '#FFF',
      black: '#2C2C2C',
    },
  },
  fontSizes: {
    h1: '2em',
    h2: '1.5em',
    body: '1em',
    default: '1em',
  },
};

export default theme;