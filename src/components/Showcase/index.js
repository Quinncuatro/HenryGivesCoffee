import React from "react"
import showcaseStyles from "./showcase.module.css"

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default (props) => (
  <div>
    { !props.hidden && 
      <div>
        <span className={showcaseStyles.projectName}>{ props.projectName }</span> by <span className={showcaseStyles.projectName}> { props.devName }</span>
        <p>{ props.description }</p>
        { props.plug && <p><b>Wanted to Plug</b>: { props.plug }</p> }
        <img className={showcaseStyles.imageScreenshot} src={images[props.projectScreenshot]} alt={props.projectName} />
        <div>
          <a href={props.liveURL} target="_blank" rel="noopener noreferrer">[ Live Site ]&nbsp;</a>
          { props.gitURL && <a href={props.gitURL} target="_blank" rel="noopener noreferrer">[ Git Repo ]&nbsp;</a> }
          { props.paymentURL && <a href={props.paymentURL} target="_blank" rel="noopener noreferrer">[ Donate ]&nbsp;</a> }
          <a href={props.devContact} target="_blank" rel="noopener noreferrer">[ Get In Touch ]&nbsp;</a>
          <br /><br />
        </div>
        <hr />
      </div>
    }
  </div>
)