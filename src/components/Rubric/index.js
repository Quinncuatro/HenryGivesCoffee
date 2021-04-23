import React, { useState, useEffect } from "react"
import rubricStyles from "./rubric.module.css"
import Footer from "../Footer"

const Rubric = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={rubricStyles.typed}>&nbsp;less rubric.conf<span>&nbsp;</span></span></p>
      <div className={hidden ? rubricStyles.hiddenPart : ""}>
        <h1>Selection Rubric || Local Communities</h1>
        <hr/>
        <div>
          <p>Even in the first month, Henry Gives Coffee has received so many more submissions than I could have hoped for. With this many websites to sort through, I felt a rubric would help me pick our winners.</p>
          
          <p>Every month, after the deadline, these two rounds will help whittle them down.</p>

          <p>Round 1 - Basic Criteria:</p>
          <ul>
            <li>Projects must be live and accessible somewhere.</li>
            <li>Projects must be open source, to help other folks make the web rad.</li>
          </ul>

          <p>Round 2 - Sliding Scales:</p>
          <ul>
            <li>Novelty and need/usefulness of the projects.</li>
            <li>Community and developer activity (i.e. are the developers responsive and actively maintaining the projects?).</li>
            <li>Another qualifier or two based on the month's theme.</li>
          </ul>

          <p>I wish I could afford to buy all of you coffee, but sadly that's not the case. However, I can (and want to) be transparent about this part of the process.</p>

          <p>The winners will for sure get their coffee money and write-up on the winners page.</p>

          <p>And for now, all other submissions that match the theme will get a showcase card showing off their projects!</p>

          <p>All of you are the ones doing the hard work of making the internet a more rad place. I'm glad to help get more eyes on your sites and maybe find some future collaborators!</p>

          <p>And thank you all SO much for the support. It means more than you know.</p>

          <h1><span role="img" aria-label="Handsign of heavy metal horns.">🤘</span></h1>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default Rubric;