import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import pastWinnersStyles from "./pastWinners.module.css"
import PostListing from "../Posts"
import Footer from "../Footer"

const PastWinners = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={pastWinnersStyles.typed}>&nbsp;history<span>&nbsp;</span></span></p>
      <div className={hidden ? pastWinnersStyles.hiddenPart : ""}>
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
      query pastWinnersQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "pastWinners" } } }
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
    render={PastWinners}
  />
)