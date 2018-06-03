import React from 'react';
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
module.exports = (req, res) => {
  res.send(renderHTML());
};

export default function serverRenderer() {
  return (req, res) => {
    const htmlString = renderToString(<App />);
    res.send(renderHTML(htmlString));
  };
}
