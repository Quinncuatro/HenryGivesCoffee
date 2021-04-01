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
        <a href="https://github.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ GitHub ]</a>&nbsp;<a href="https://ko-fi.com/henryquinn" target="_blank" rel="noopener noreferrer">[ Ko-fi ]</a>&nbsp;
        <a href="https://www.twitter.com/quinncuatro" target="_blank" rel="noopener noreferrer">[ Twitter ]</a>
        <h2>Chat Apps</h2>
        <a href="https://discordapp.com/users/Quinncuatro#0653" target="_blank" rel="noopener noreferrer">[ Discord ]</a>&nbsp;
        <a href="https://t.me/quinncuatro" target="_blank" rel="noopener noreferrer">[ Telegram ]</a><br/>
        <hr />
        <Footer />
      </div>
    </div>
  )
}

export default ContactPage;
