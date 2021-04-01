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
          <h1>Micro-Scholarships for <u>Rad</u> <u>Web</u> <u>Shit</u></h1>
          <hr/>
          <h3>The internet is way more fun when people are working on fun side projects.</h3>
          
          

          <h3>My friends help me run <a href="https://newhaven.io" target="_blank" rel="noopener noreferrer">NewHaven.IO</a>, coach <a href="https://opensports.net/NewHavenNerdLeague" target="_blank" rel="noreferrer">New Haven Nerd League</a>, and build web projects.</h3>
         
          <h3>Please <Link to="/contact/">hit me up</Link> if you want to collab on something!</h3>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;