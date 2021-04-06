import React from "react"
import patronStyles from "./patron.module.css"

export default (props) => (
  <div>
    <div>
      <p className={patronStyles.projectName}>- { props.PatronName }</p>
    </div>
  </div>
)