import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
  verification: {
    google: "2sXL7FI8HMCaI6MhspjJPyDhW1HRAAC9nCVtkCWG0Kw",
  },
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <meta name="google-site-verification" content="2sXL7FI8HMCaI6MhspjJPyDhW1HRAAC9nCVtkCWG0Kw" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </head>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
