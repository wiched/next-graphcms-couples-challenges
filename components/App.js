import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const App = ({ children, pathname }) => (
  <Fragment>
    <Head>
      <title>CouplesChallenges.com</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css' />
    </Head>
    <Header pathname={pathname} />
    <main className="container">
      {children}
    </main>
    <Footer />
    <style jsx global>{`

      body {
        font-family: Roboto, GillSans, Calibri, Trebuchet, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
        color: #6c747f;

      }
      main {
        max-width: 750px !important;
        margin: 32px auto;
        padding: 0 24px;
      }
      a {
        color: deepskyblue;
        text-decoration: none;
      }
      article {
        margin: 0 auto;
        max-width: 650px;
      }
      .showMore button, #nav-mobile button {
        all: unset
      }
      button:focus {
        background-color: transparent !important;
        box-shadow: none !important;
      }
      .btn:hover {
        background-color: #f4511e;
        box-shadow: none;
      }
      img {
        height: auto;
        max-width: 100%;
      }
      .pointer {
        cursor: pointer;
      }
    `}</style>
  </Fragment>
)

export default App
