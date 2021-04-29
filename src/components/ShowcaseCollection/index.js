import React, { useState, useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import showcaseCollectionStyles from "./showcaseCollection.module.css"
import Showcase from "../Showcase"
import Footer from "../Footer"

const ShowcasePage = data => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryNeeds ~]$ <span className={showcaseCollectionStyles.typed}>&nbsp;ls /var/www/html/<span>&nbsp;</span></span></p>
      <div className={hidden ? showcaseCollectionStyles.hiddenPart : ""}>
        <h1>Project Showcase</h1>
        <hr/>
        <p>These are the projects from each collection that absolutely blew me away. Devs building rad shit for the web is always a good thing, and these developers earned their coffee.</p>
        <hr/><hr/>
        <h2>Collection 1: Local Community</h2>
        <hr/><hr/>
        {data.allShowcaseYaml.edges[0].node.projects.map((project) => (
          <Showcase
            devName={project.devName}
            projectName={project.projectName}
            liveURL={project.liveURL}
            gitURL={project.gitURL}
            description={project.description}
            plug={project.plug}
            projectScreenshot={project.projectScreenshot}
            paymentURL={project.paymentURL}
            devContact={project.devContact}
          />
        ))}
        <hr/><hr/>
        <h2>Collection 0: Henry Gives Coffee</h2>
        <hr/><hr/>
        <Showcase
          devName="Henry Quinn"
          projectName="Henry Gives Coffee"
          liveURL="https://henrygives.coffee"
          gitURL="https://github.com/quinncuatro/HenryGivesCoffee"
          description="Let's be real, this is just a card to show what other projects will look like in the showcase. I drank a decent amount of coffee for how long it took me to throw Henry Gives Coffee together, but this website is way more about all of the cool things the rest of y'all are building. :)"
          projectScreenshot="0"
          paymentURL="https://ko-fi.com/henrygivescoffee"
          devContact="https://twitter.com/quinncuatro"
        />
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
                plug
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