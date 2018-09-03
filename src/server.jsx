import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import { HelmetProvider } from 'react-helmet-async';
import theme from './client/styles/theme';
import App from './client/app';
import Html from './client/html';

const server = express();
server.set('port', process.env.PORT || 5000);

server.use(express.static(path.resolve(__dirname)));
server.get('*', (req, res) => {
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();
  const helmetContext = {};

  const body = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <HelmetProvider context={helmetContext}>
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MuiThemeProvider>
      </HelmetProvider>
    </JssProvider>,
  );

  const { title, meta } = helmetContext.helmet;

  res.send(
    Html({
      title: title.toString(),
      meta: meta.toString(),
      styles: sheetsRegistry.toString(),
      body,
    }),
  );
});

server.listen(server.get('port'), () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on port ${server.get('port')}`);
});
