import { Fragment } from 'react';
import Head from 'next/head';

export default () => (
  <Fragment>
    <Head>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-100423670-3" />
      {/* eslint-disable react/no-danger */}
      <script dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date());
        gtag('config', 'UA-100423670-3');`,
      }}
      />
      {/* eslint-enable react/no-danger */}
      <title>Devlin Pajaron | JavaScript Developer</title>

      {/* <!-- META --> */}
      <meta charSet="utf-8" />
      <meta name="description" content="Lorem ipsum I need some dollar." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="Devlin Pajaron | JavaScript Developer" />
      <meta property="og:description" content="Lorem ipsum I need some dollar." />
      <meta property="og:image" content="/static/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/static/favicon.png" />

      {/* <!-- Resources --> */}
      <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400" type="text/css" />
      <link rel="shortcut icon" href="/static/favicon.png" />
    </Head>
  </Fragment>
);
