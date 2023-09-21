// components/Layout.js
import Head from 'next/head';
import styles from '/styles/Home.module.css';



const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
      <title>Kékvonal Beosztó</title>
      <link rel="icon" href="/icons8-phone-94.png" />
    </Head>
    

      {/* Page content */}
      <main>{children}</main>

      {/* Common footer */}
      <footer>
      <a
        href="https://www.linkedin.com/in/code-marci/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Marci
        <img src="/icons8-boy-64.png" alt="Marci" className={styles.logo} />
      </a>
    </footer>
      <style jsx>{`
      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      footer img {
        margin-left: 0.5rem;
      }
      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        color: #3a495a; /* A shade of blue that matches well with blue tones */
        background: linear-gradient(45deg, #00b4d8, #90e0ef); /* Gradient background with blue tones */
        padding: 5px 20px; /* Smaller padding around the text */
        border-radius: 3px; /* Slightly rounded corners */
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Text shadow for subtle shine */
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
      }
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family:
          Menlo,
          Monaco,
          Lucida Console,
          Liberation Mono,
          DejaVu Sans Mono,
          Bitstream Vera Sans Mono,
          Courier New,
          monospace;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family:
          -apple-system,
          BlinkMacSystemFont,
          Segoe UI,
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          Fira Sans,
          Droid Sans,
          Helvetica Neue,
          sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
    </div>
  );
};

export default Layout;