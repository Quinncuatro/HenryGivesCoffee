import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import patronsListStyles from "./patronsList.module.css"
import Patron from "../Patron"
import Footer from "../Footer"

const PatronsPage = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryNeeds ~]$ <span className={patronsListStyles.typed}>&nbsp;cat /etc/shadow<span>&nbsp;</span></span></p>
      <div className={hidden ? patronsListStyles.hiddenPart : ""}>
        <h1>HenryGives.Coffee Patrons</h1>
        <hr/>
        <p>All these wonderful people contribute to the <a href="https://www.patreon.com/henrygivescoffee" target="_blank" rel="noopener noreferrer">Patreon</a> set up to provide the developers making the internet a more rad place with a little more than just coffee money.</p>
        <p>I couldn't do it without y'all. 🤘</p>
        <hr/>
        {data.allPatronsYaml.edges[0].node.patrons.map((patron) => (
          <Patron
            PatronName={patron.patronName}
          />
        ))}
        <Footer />
      </div>
    </div>
  )
}
  
export default () => (
  <StaticQuery
    query={graphql`
      query patronsQuery {
        allPatronsYaml {
          edges {
            node {
              patrons {
                patronName
              }
            }
          }
        }
      }
    `}
    render={PatronsPage}
  />
)