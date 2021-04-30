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
          <h1>Micro-Scholarships for <u>Rad</u> <u>Web</u> <u>Shit</u>.</h1>
          <h3>Collection 2: Web Projects for Education (May 2021)</h3>
          <p>There are a lot of projects out there created to help people learn something new. Kind of goes hand in hand with this website's philosophy of creating personal spaces online.</p>
          <p>What's the coolest *<i>web thing</i>* you've built to help educate someone?</p>
          <p>If your project makes the cut, you'll get some coffee money. On me. ;)</p>
          <p>Accepting entries through <strong><u>noon on May 23rd, 2021</u></strong>.</p>
          <hr/>
          <SubmissionForm/>
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default Submission;