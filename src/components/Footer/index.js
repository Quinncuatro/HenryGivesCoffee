import React from "react"
import footerStyles from "./footer.module.css"
import NewsletterForm from "../NewsletterForm"

let now = new Date();
let year = now.getFullYear();

export default () => (
  <div>
    <NewsletterForm />
    <hr />
    <div>
      <p>Made with &#9749; in New Haven || &copy; {year}, <a href="https://henryneeds.coffee" target="_blank" rel="noopener noreferrer">Henry Quinn</a> || <a href="https://twitter.com/henrygivescoffe" target="_blank" rel="noopener noreferrer">Twitter</a></p>
    </div>
    <div>
      <a href="https://github.com/quinncuatro/henrygivescoffee">Source Code</a> Includes: <a href="https://www.gatsbyjs.com/">GatsbyJS</a>, <a href="https://www.netlify.com/">Netlify</a>, <a href="https://daringfireball.net/projects/markdown/"><span title="Be the Aaron Swartz you want to see in the world.">Markdown</span></a>
    </div>
  </div>
)

