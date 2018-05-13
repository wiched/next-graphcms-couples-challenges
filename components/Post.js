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
            alt={post.title}
            src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
          />
        </div>
        <Markdown
          source={post.content}
          escapeHtml={false}
        />
        <div className="col s12 m8 offset-m2 l6 offset-l3">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <div className="col s2">
                <img src="https://picsum.photos/50/50" alt="" className="circle responsive-img" />
              </div>
              <div className="col s10">
                <span className="black-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo adipisci sit distinctio sapiente expedita in molestias
                </span>
              </div>
            </div>
          </div>
        </div>
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
