export default ({
  title, meta, styles, body,
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
      ${title}
      ${meta}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
      <style type="text/css" id="ssr-styles">
        ${styles}
      </style>
    </body>
  </html>
`;
