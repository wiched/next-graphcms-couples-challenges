import { Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const AuthorInfo = ({ data: { loading, error, allAbouts } }) => {
  if (error) return <h1>Error loading</h1>
  if (!loading) {
    return (
      <Fragment>

        {allAbouts.map(about => (
          <div className='author' key={about.id}>
            <h4 id="about">{about.title}</h4>
            <div className='info-header'>
              <img
                alt={about.title}
                src={`https://media.graphcms.com/resize=w:300,h:300,fit:crop/${about.image.handle}`}
              />

            </div>
            <p>{about.content}</p>
          </div>
        ))}
        <style jsx>{`
        h1 {
          font-size: 2em;
          font-weight: bold;
          text-align:center
        }
          .author {
            margin-bottom: 72px;
          }
          .info-header {
            text-align: center;
          }
          img {
            height: 120px;
            width: auto;
          }
        `}</style>
      </Fragment>
    )
  }
  return <h2>Loading author...</h2>
}

export const allAbouts = gql`
query allAbouts {
  allAbouts {
    id
   title
   content
    image {
      handle
    }
  }
}
`

export default graphql(allAbouts)(AuthorInfo)
