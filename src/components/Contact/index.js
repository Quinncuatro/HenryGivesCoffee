import React, { useState, useEffect } from "react"
import contactStyles from "./contact.module.css"
import Footer from "../Footer"

let myEmail = "HenryQuinnIV" + String.fromCharCode(64) + "gmail.com";

const ContactPage = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={contactStyles.typed}>&nbsp;sendmail<span>&nbsp;</span></span></p>
      <div className={hidden ? contactStyles.hiddenPart : ""}>
        <h1>Contact</h1>
        <hr/>
        <h2>Email</h2>
        <a href={ "mailto:"+myEmail }> [ Email Me ]</a>
        <h2>Social Media</h2>
        <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ GitHub ]</a>&nbsp;
        <a href="https://www.twitter.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ Twitter ]</a>
        <br/><br/>
        <h1>Donate</h1>
        <hr/>
        <p>With your help, we can reward developers with a little more than just coffee money.</p>
        <p>In the future I'd love to be able to send merch, PaaS/SaaS credits, and maybe some actual coffee to the people making the internet a more rad place!</p>
        <h2>One Off Donations</h2>
        <a href="https://ko-fi.com/henryquinn" target="_blank" rel="noopener noreferrer">[ Ko-Fi ]</a>
        <h2>Monthly Donations</h2>
        <a href="https://www.patreon.com/henrygivescoffee" target="_blank" rel="noopener noreferrer">[ Patreon ]</a>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage;
