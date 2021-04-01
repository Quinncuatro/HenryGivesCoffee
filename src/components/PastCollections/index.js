import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import blogStyles from "./blog.module.css"
import PostListing from "../Posts"
import Footer from "../Footer"

const PastCollections = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={blogStyles.typed}>&nbsp;history<span>&nbsp;</span></span></p>
      <div className={hidden ? blogStyles.hiddenPart : ""}>
        <h1>Recent Articles</h1>
        <hr />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostListing key={node.id} post={node} />
        ))}
        <Footer />
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query pastCollectionsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "pastCollections" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                category
                date(formatString: "MMMM Do, YYYY")
                desc
                title
              }
              html
              excerpt(pruneLength: 280)
            }
          }
        }
      }
    `}
    render={PastCollections}
  />
)