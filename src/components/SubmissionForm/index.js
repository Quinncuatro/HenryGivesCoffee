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

          <li>What's the name of your project?</li>
          <p>
            <input type="text" name="project-name" required />
          </p>

          <li>If it's live on the web, throw me a URL? Alternatively, throw me a link to a repo?</li>
          <p>
            <input type="text" name="project-url" required />
          </p>

          <li>Tell me all about your project! What inspired it? What challenged you?</li>
          <p>
            <textarea rows="3" cols="55" name="project-desc" required></textarea>
          </p>

          <li>In case your project is rad as hell:
            <p>a.) What's your Venmo/Cash/Ko-fi or whatever?</p>
            <p>
              <input type="text" name="payment" required />
            </p>
            <p>b.) Anything you want to plug in the writeup, like a podcast or another project?</p>
            <p>
            <input type="text" name="plug" required />
            </p>
            <p>c.) What's a good way for me and others to get ahold of you? Maybe your Twitter or a personal website?</p>
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
