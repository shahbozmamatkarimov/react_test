import Document, { Html, Head, Main, NextScript } from "next/document";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      Html: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
    }
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" translate="no">
        <Head />
        <body className="bg-slate-100 dark:bg-slate-900 transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
