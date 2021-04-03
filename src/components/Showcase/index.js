import React from "react"
import showcaseStyles from "./showcase.module.css"
import HCGImg from "./images/HenryGivesCoffee.jpg"

export default (props) => (
  <div>
    { !props.hidden && 
      <div>
        <span className={showcaseStyles.projectName}>{ props.projectName }</span> by <span className={showcaseStyles.projectName}> { props.devName }</span>
        <p>{ props.description }</p>
        <img className={showcaseStyles.imageScreenshot} src={HCGImg} alt="Screenshot of Henry Gives Coffee" />
        <div>
          <a href={props.liveURL} target="_blank" rel="noopener noreferrer">[ Live Site ]&nbsp;</a>
          <a href={props.gitURL} target="_blank" rel="noopener noreferrer">[ Git Repo ]&nbsp;</a>
          <a href={props.paymentURL} target="_blank" rel="noopener noreferrer">[ Ko-fi ]&nbsp;</a>
          <a href={props.devContact} target="_blank" rel="noopener noreferrer">[ Twitter ]&nbsp;</a>
          <br /><br />
        </div>
        <hr />
      </div>
    }
  </div>
)