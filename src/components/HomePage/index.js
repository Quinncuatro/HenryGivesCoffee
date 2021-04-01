import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import homePageStyles from "./homePage.module.css"
import Footer from "../Footer"

const HomePage = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={homePageStyles.typed}>&nbsp;whoami<span>&nbsp;</span></span></p>
      <div className={hidden ? homePageStyles.hiddenPart : ""}>
        <div>
          <h1>Micro-Scholarships for Rad Web Shit</h1>
          <hr/>
          <h3>I do DevOps for <a href="https://clarityssi.com" target="_blank" rel="noopener noreferrer">Clarity SSI</a>, maintain a <a href="https://techenthusiastscholarship.com" target="_blank" rel="noopener noreferrer">Tech Enthusiast Scholarship</a>, created <a href="https://newhavenreliefresources.com" target="_blank" rel="noopener noreferrer">New Haven Relief Resources</a>, and build micro communities with <a href="https://henryneeds.coffee/posts/elm-city-rocks/" target="_blank" rel="noopener noreferrer">Rad Shit Project</a>.</h3>
          <h3>My friends help me run <a href="https://newhaven.io" target="_blank" rel="noopener noreferrer">NewHaven.IO</a>, coach <a href="https://opensports.net/NewHavenNerdLeague" target="_blank" rel="noreferrer">New Haven Nerd League</a>, and build web projects.</h3>
          <h3>I made an eLearning course called <a href="https://www.udemy.com/course/introduction-to-server-administration/" target="_blank" rel="noopener noreferrer">Intro to Server Administration</a>,and love to help people learn.</h3>
          <h3>Please <Link to="/contact/">hit me up</Link> if you want to collab on something!</h3>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;