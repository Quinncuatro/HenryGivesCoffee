import React from "react"
import footerStyles from "./footer.module.css"

let now = new Date();
let year = now.getFullYear();

export default () => (
  <div>
    <hr />
    <p>Made with <span className={footerStyles.heart}>&#10084;</span> in New Haven || &copy; {year} <a href="https://henryneeds.coffee">Henry Quinn</a></p>
  </div>
)

