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
        <h1>Micro-Scholarships for <u>Rad</u>. <u>Web</u>. <u>Shit</u>.</h1>
        <hr/>
        <div>
          <h2>Theme for June 2021: Sharing a Hobby</h2>
          <p>I've learned so much about a dizzying array of subjects from websites folks have set up just to share information about their hobbies. From rock climbing to baking fresh sourdough to skydiving, there are all sorts of people trying to teach others about things they're passionate about.</p>
          <p>If you've ever set up a site to share info about a hobby you have outside of web development (doesn't matter how big or small) I'd love if you shared it with me!</p>
          <p>Head on over to the submission form, tell me a little about what you hacked on, and maybe I'll give you some coffee!</p>
          <Link to="/submission/">[ Submit a Project ]</Link>&nbsp;
        </div>
        <hr/>
        <div>
          <h2>So What <u>IS</u> Henry Gives Coffee?</h2>

          <p>After building side projects on the web for a decade, I still loop back to one thought:</p>

          <p><blockquote>"How rad would it be if this could earn me some beer money?"</blockquote></p>
          
          <p>The internet is infinitely more cool when folks build rad shit, and those devs 100% deserve some money for caffeine, snacks, or whatever.</p>

          <p>That's where I come in.</p>

          <p>Every month I'll pick a new theme. If you've built something rad that fits the theme (like at ALL), feel free to submit it!</p>

          <p>I'll select three projects that stand out, write an article to showcase them, and throw each of the developers $25!</p>
          
          <p>Listen, if you're reading this, you've probably built something cool.</p>
          
          <p>Let me give you a coffee for making the internet a more interesting place.</p>
        </div>
        <hr/>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;