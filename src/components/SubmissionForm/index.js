import React from "react"

export default () => (
  <div>
    <h2>Submission Form</h2>
    <form name="project-submission" method="POST" action="/apply-thanks/" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="project-submission" />
      <div hidden>
        <label>
          What's your favorite movie and why is it rampart?{' '}
          <input name="bot-field" />
        </label>
      </div>
      <div>
        <ol>
          <li>Your Name</li>
          <p>
            <input type="text" name="name" required />
          </p>

          <li>Project Name</li>
          <p>
            <input type="text" name="project-name" required />
          </p>

          <li>Live URL</li>
          <p>
            <input type="text" name="project-url" required />
          </p>

          <li>Git Repo URL</li>
          <p>
            <input type="text" name="project-git" required />
          </p>

          <li>Tell me all about your project! What inspired it? What challenged you?</li>
          <p>
            <textarea rows="3" cols="55" name="project-desc" required></textarea>
          </p>

          <li>In case your project is rad as hell:
            <p>a.) What's your Venmo/Cash/Ko-fi or whatever? Username AND service, please!</p>
            <p>
              <input type="text" name="payment" required />
            </p>
            <p>b.) Is there anything you want plugged in the writeup?</p>
            <p>
            <input type="text" name="plug" required />
            </p>
            <p>c.) What's a good way to get ahold of you? Maybe Twitter or a personal website?</p>
            <p>
            <input type="text" name="contact" required />
            </p>
          </li>

          <p>
            <button type="submit">Send</button>
          </p>
        </ol>
      </div>
    </form>
  </div>
)
