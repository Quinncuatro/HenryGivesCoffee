import React from "react"
import footerStyles from "./footer.module.css"
import NewsletterForm from "../NewsletterForm"

let now = new Date();
let year = now.getFullYear();

export default () => (
  <div>
    <NewsletterForm />
    <hr />
    <p>Made with <span className={footerStyles.heart}>&#10084;</span> in New Haven || &copy; {year}, <a href="https://henryneeds.coffee" target="_blank" rel="noopener noreferrer">Henry Quinn</a> || <a href="https://twitter.com/henrygivescoffe" target="_blank" rel="noopener noreferrer">Twitter</a></p>
  </div>
)

