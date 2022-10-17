export default ({ title, children }) => (
  <html>
    <head>
      {/*<!-- Copyright 2018 Twitter, Inc and other contributors. Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/ -->*/}
      <link rel="icon" type="image/png" href="https://favi.deno.dev/🔨.png" />
      <link rel="apple-touch-icon" href="https://favi.deno.dev/🔨.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
      <meta charset="UTF-8" />
      <style>
        {":root, body{height: 100%; font-family: 'Noto Sans JP', sans-serif;}"}
      </style>
    </head>
    <body>
      {children}
    </body>
  </html>
);
