import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import showcaseCollection from "./showcaseCollection.module.css"
import Showcase from "../Showcase"
import Footer from "../Footer"

const ShowcasePage = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryNeeds ~]$ <span className={showcaseCollection.typed}>&nbsp;cat /etc/shadow<span>&nbsp;</span></span></p>
      <div className={hidden ? showcaseCollection.hiddenPart : ""}>
        <h1>Project Showcase</h1>
        <hr/>
        <p>These are the projects from each collection that absolutely blew me away. Devs building rad shit for the web is always a good thing, and these developers earned their coffee.</p>
        <hr/><hr/>
        <h2>Collection 0: Henry Gives Coffee</h2>
        <hr/>
        {data.allShowcaseYaml.edges[0].node.projects.map((project) => (
          <Showcase
            devName={project.devName}
            projectName={project.projectName}
            liveURL={project.liveURL}
            gitURL={project.gitURL}
            description={project.description}
            projectScreenshot={project.projectScreenshot}
            paymentURL={project.paymentURL}
            devContact={project.devContact}
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
      query showcaseQuery {
        allShowcaseYaml {
          edges {
            node {
              projects {
                devName
                projectName
                liveURL
                gitURL
                description
                projectScreenshot
                paymentURL
                devContact
              }
            }
          }
        }
      }
    `}
    render={ShowcasePage}
  />
)