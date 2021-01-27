
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { resolve } from 'url'
import { processEnv } from '@lib/processEnv'

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext) {
    return await super.getInitialProps(ctx)
  }

  render() {
    const { pageProps } = this.props.__NEXT_DATA__.props
    const { cmsData, settings }  = pageProps || { cmsData: null, settings: null }
    const { settings: cmsSettings , bodyClass } = cmsData || { settings: null, bodyClass: '' }
    const { lang } = settings || cmsSettings || { lang: 'en' }

    return (
      <Html {...{lang, className: 'casper' }}>
        <Head>
        {/* <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-S8TM2NH7JL"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S8TM2NH7JL');
          </script> */}

        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-S8TM2NH7JL"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-S8TM2NH7JL');
                `,
            }}
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Jamify RSS Feed"
            href={`${resolve(processEnv.siteUrl, 'rss.xml')}`}
          />
        </Head>
        <body {...{className: bodyClass}}>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
                window.isDark = localStorage.getItem('dark');
                if ( window.isDark === 'dark' ) {
                  document.body.classList.add('dark')
                } else if( window.isDark === undefined && window.matchMedia('(prefers-color-scheme: dark)').matches === true ){
                  document.body.classList.add('dark')
                }
            })()
          `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
