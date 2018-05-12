import Link from 'next/link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 2

const PostList = ({ data: { loading, error, allPosts, _allPostsMeta }, loadMorePosts }) => {
  if (error) return <h1>{error}</h1>
  if (!loading) {
    const areMorePosts = allPosts.length < _allPostsMeta.count
    return (
      <section>
        <h3 id="challenges">Pick A Challenge</h3>
        <ul>
          {allPosts.map(post => (
            <li key={`post-${post.id}`}>
              <Link prefetch href={`/post?slug=${post.slug}`} as={`/post/${post.slug}`}>
                <a>
                  <div className='placeholder'>
                    <img
                      alt={post.title}
                      src={`https://media.graphcms.com/resize=w:150,h:150,fit:crop/${post.coverImage.handle}`}
                    />
                  </div>

                  <p>{post.title} <br /> {post.content.substr(1, 250)}</p>

                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className='waves-effect waves-light deep-orange darken-1 btn-large showMore'>
          {areMorePosts
            ? <button onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Challenges'}
            </button>
            : 'No More Challenges'}
        </div>
        <style jsx>{`
          ul {
            padding: 0;
          }
          li {
            display: flex;
            align-items: center;
            margin-bottom: 16px;
            border: 1px solid #eee;
            overflow: hidden;
            border-radius: 5px;
          }
          a {
            display: flex;
            color: #000;
          }
          a:hover {
            box-shadow: 1px 1px 5px #999;
          }
          .placeholder {
            background-color: #eee;
            min-width: 145px;
            margin-right: 24px;
          }
          img {
            display: block;
            height: 100%;
          }
          .showMore {
            display: flex;
            justify-content: center;
          }
          button {
            width: 100%;
            font-size: 16px;
            color: white;
            text-transform: uppercase;
            font-weight: bold;
            border: none;
            border-radius: 0;
            cursor: pointer;
            margin-bottom: 100px;
          }

        `}</style>
      </section>
    )
  }
  return <h2>Loading posts...</h2>
}

export const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id
      slug
      title
      dateAndTime
      content
      coverImage {
        handle
      }
    },
    _allPostsMeta {
      count
    }
  }
`

export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(allPosts, {
  options: {
    variables: allPostsQueryVars
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(PostList)
