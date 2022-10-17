const THEME_COLOR = "#3B82F6";

export default ({ title, children, description }) => (
  <html lang="ja">
    <head>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta http-equiv="content-language" content="ja" />
      {/*<!-- Copyright 2018 Twitter, Inc and other contributors. Graphics licensed under CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/ -->*/}
      <link rel="icon" type="image/png" href="https://favi.deno.dev/🔨.png" />
      <link rel="apple-touch-icon" href="https://favi.deno.dev/🔨.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap"
        rel="stylesheet preload"
        as="style"
      />
      <meta name="description" content={description} />
      <meta name="theme-color" content={THEME_COLOR} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content="https://piderlab.github.io/meta-maintenance/"
      />
      <meta property="og:image" content="https://favi.deno.dev/🔨.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hideakihata" />
      <style>
        {":root, body{height: 100%; font-family: 'Noto Sans JP', sans-serif;}"}
      </style>
    </head>
    <body>
      {children}
    </body>
  </html>
);
