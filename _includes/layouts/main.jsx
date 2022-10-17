export default ({ title, children }) => (
  <html>
    <head>
      {/*<!-- Copyright 2018 Twitter, Inc and other contributors. Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/ -->*/}
      <link rel="icon" type="image/png" href="https://favi.deno.dev/🔨.png" />
      <link rel="apple-touch-icon" href="https://favi.deno.dev/🔨.png" />
      <title>{title}</title>
      <meta charset="UTF-8" />
    </head>
    <body>
      {children}
    </body>
  </html>
);
