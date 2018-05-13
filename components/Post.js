import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'

const PostContent = ({ data: { loading, error, post } }) => {

  if (error) return <h1>Error loading post.</h1>
  if (!loading) {
    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.dateAndTime.substr(0, 10)}</p>
        <div className='placeholder'>
          <img
            className="z-depth-1"
            alt={post.title}
            src={`https://media.graphcms.com/resize=w:650,h:366/${post.coverImage.handle}`}
          />
        </div>
        <Markdown
          source={post.content}
          escapeHtml={false}
        />
        <style jsx>{`

        `}</style>
      </article>
    )
  }
  return (
    <div className="preloader-wrapper active">
      <div className="spinner-layer spinner-red-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  )
}

export const singlePost = gql`
  query singlePost($slug: String!) {
          post: Post(slug: $slug) {
          id
      slug
        title
      coverImage {
          handle
        }
        content
        dateAndTime
      }
    }
  `

export default graphql(singlePost, {
  options: ({ slug }) => ({ variables: { slug } })
})(PostContent)
