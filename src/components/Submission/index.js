import React, { useState, useEffect } from "react"
import submissionStyles from "./submission.module.css"
import SubmissionForm from "../SubmissionForm"
import Footer from "../Footer"

const Submission = () => {
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    setTimeout(() => setHidden(false), 900)
  }, [])

  return (
    <div>
      <p>[hquinn@HenryGives ~]$ <span className={submissionStyles.typed}>&nbsp;./submit.sh<span>&nbsp;</span></span></p>
      <div className={hidden ? submissionStyles.hiddenPart : ""}>
        <div>
          <h1>Micro-Scholarships for Rad Web Shit</h1>
          <h3>April 2021 - Web Projects for Local Communities</h3>
          <p>Some of my favorite projects (both to work on and see in the wild) have been things folks have built to help communities they're involved with.</p>
          <p>What's the coolest <i>web thing</i> you've built for a local community?</p>
          <p>If your project makes the cut, you'll get some coffee money. On me. ;)</p>
          <p>Accepting entries through <strong><u>April 23rd, 2021</u></strong>.</p>
          <SubmissionForm />
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default Submission;