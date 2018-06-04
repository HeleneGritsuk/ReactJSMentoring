import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
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
    </head>
    <body>
      <div id="app" class="main">${html}</div>
      <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
      <script src="./index.js"></script>
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  const reduxStore = store;
  const context = {};
  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context} >
        <App />
      </StaticRouter>
    </Provider>
  );

  const html = renderToString(app);

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(context.url);
  }
  const preloadedState = reduxStore.getState();

  return res.send(renderHTML(html, preloadedState));
}

export default handleRender;
