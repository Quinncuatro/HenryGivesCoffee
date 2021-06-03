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
          <h2>Collection 3: Web Projects for Sharing a Hobby (May 2021)</h2>
          <p>I've seen a lot of incredible projects that exist to help share information about a developer's other hobbies. For instance, I wouldn't be the rock climber I am today without other folks sharing their knowledge about different training techniques. Those kinds of sites go hand in hand with this website's philosophy of creating personal spaces online.</p>
          <p>What's the coolest *<i>web thing</i>* you've built to help share your hobby with someone?</p>
          <p>If your project makes the cut, you'll get some coffee money. On me. ;)</p>
          <p>Accepting entries through <strong><u>noon on June 23rd, 2021</u></strong>.</p>
          <hr/>
          <SubmissionForm />
        </div>
        <hr/>
        <Footer />
      </div>
    </div>
  )
}

export default Submission;