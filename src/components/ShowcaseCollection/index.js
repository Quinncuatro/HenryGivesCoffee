import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import showcaseCollection from "./showcaseCollection.module.css"
import Showcase from "../Showcase"
import Footer from "../Footer"

const SignalBoostPage = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryNeeds ~]$ <span className={showcaseCollection.typed}>&nbsp;useradd<span>&nbsp;</span></span></p>
      <div className={hidden ? showcaseCollection.hiddenPart : ""}>
        <h1>Signal Boosts</h1>
        <hr/>
        <p>These amazing folks are currently looking for a job. If you or your orgs are hiring for roles with these skills, please feel free to reach out to them.</p>
        <p>To add yourself to this list, fork <a href="https://github.com/Quinncuatro/Henry-Personal-Website" target="_blank" rel="noopener noreferrer">this website's source code</a> and submit a pull request with edits following <a href="https://github.com/Quinncuatro/Henry-Personal-Website/blob/master/src/signalboost/" target="_blank" rel="noopener noreferrer">these instructions</a>.</p>
        <p>With COVID-19 continuing to rage across the world, these people are in need of a job now more than ever.</p>
        <hr/><hr/>
        <h2>People</h2>
        <hr/>
        {data.allShowcaseYaml.edges[0].node.people.map((person) => (
          <Showcase
            name={person.name}
            hidden={person.hidden}
            tech={person.tech}
            blog={person.blog}
            devto={person.devto}
            dribbble={person.dribbble}
            github={person.github}
            gitlab={person.gitlab}
            linkedin={person.linkedin}
            twitter={person.twitter}
            website={person.website}
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
      query signalBoostQuery {
        allShowcaseYaml {
          edges {
            node {
              people {
                name
                hidden
                tech
                blog
                devto
                dribbble
                github
                gitlab
                linkedin
                twitter
                website
              }
            }
          }
        }
      }
    `}
    render={SignalBoostPage}
  />
)