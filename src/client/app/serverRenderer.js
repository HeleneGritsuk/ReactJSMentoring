import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { renderToString } from 'react-dom/server';
import App from './App';

function renderHTML(html, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>React SSR</title>
      ${process.env.NODE_ENV === 'development' ? '' : '<link href="./main.css" rel="stylesheet" type="text/css">'}
    </head>
    <body>
      <div id="app" class="main">${html}</div>
      <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="localhost:3000/bundle.js"></script>
    </body>
  </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};

    const root = (
      <App
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

    const htmlString = renderToString(root);

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}
