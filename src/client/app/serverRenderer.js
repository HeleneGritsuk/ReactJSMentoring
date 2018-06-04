import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from './App';

function renderHTML(html) {
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
      <script src="./index.js"></script>
    </body>
  </html>
  `;
}

function handleRender(req, res) {
  const context = {};
  const app = (
    <StaticRouter location={req.url} context={context} >
      <App />
    </StaticRouter>
  );

  const html = renderToString(app);

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    return res.redirect(context.url);
  }

  return res.send(renderHTML(html));
}

export default handleRender;
