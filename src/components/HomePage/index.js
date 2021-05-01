import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import homePageStyles from "./homePage.module.css"
import NewsletterForm from "../NewsletterForm"
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
          <h2>Theme for May 2021: Education</h2>

          <p>One of the incredible things we can do with web technologies is help other folks learn something new. I, personally, learned modern web development with free resources online.</p>

          <p><a href="https://freecodecamp.org">FreeCodeCamp</a> was a huge help to me, but there are other things out there to help students brush up on their math skills, teach folks about gardening, or to share backpacking tips & tricks.</p>

          <p>If you've helped someone learn with something cool you've built (doesn't matter how big or small) I'd love if you shared it with me!</p>

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