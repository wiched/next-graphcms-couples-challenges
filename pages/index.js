import withData from '../lib/withData'
import App from '../components/App'
import PostList from '../components/PostList'
import AuthorInfo from '../components/AuthorInfo'
import Contacts from '../components/Contact'
import Head from 'next/head'

const IndexPage = withData(props => (
  <App pathname={props.url.pathname}>

    <AuthorInfo />
    <PostList />
    <Contacts />
  </App>
))

export default IndexPage
