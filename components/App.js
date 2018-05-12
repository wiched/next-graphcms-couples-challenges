import { Fragment } from 'react'
import Header from './Header'
import Head from 'next/head'

const App = ({ children, pathname }) => (
  <Fragment>
    <Head>
      <title>CouplesChallenges.com</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css' />
    </Head>
    <Header pathname={pathname} />
    <main>
      {children}
    </main>
    <style jsx global>{`
      body {
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
      }
      main {
        max-width: 650px;
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
      button {
        all: unset
      }
    `}</style>
  </Fragment>
)

export default App
