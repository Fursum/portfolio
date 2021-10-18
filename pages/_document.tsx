import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
        <Html>
            <Head>
                <head>
                    <title>Fursum</title>
                </head>
                <link rel="shortcut icon" href="/svg/Favicon.svg" />
                <meta name="author" content="Fursum" />
                <meta property="description" content="My personal portfolio." />
                <meta title="Fursum" />

                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Portfolio" />
                <meta property="og:title" content="Portfolio" />
                <meta
                    property="og:description"
                    content="My personal portfolio."
                />
                <meta
                    property="og:image"
                    content="https://cdn.discordapp.com/attachments/287327372389384204/895806686256857088/unknown.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@discord" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
  }
}

export default MyDocument;
