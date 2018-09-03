import React from 'react';
import { render, hydrate } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import App from './app';

class Main extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('ssr-styles');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return <App />;
  }
}

const handleRender = process.env.NODE_ENV === 'production' ? hydrate : render;

handleRender(
  <HelmetProvider>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </MuiThemeProvider>
  </HelmetProvider>,
  document.querySelector('#app'),
);
