import React from "react"

const MAILCHIMP_URL = process.env.MAILCHIMP_URL;

export default () => (
  <div>
    <h2>Rad Web Shit Right In Your Inbox <span role="img" aria-label="Handsign of heavy metal horns.">🤘</span></h2>

    <p>Sign up for one long update at the start of every month about the new group of winners followed by three shorter weekly updates about other cool projects around the internet.</p>

    <p>I only store your email, which I promise to never sell. That'd be the opposite of rad.</p>
    
    <form
        action={MAILCHIMP_URL}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="relative flex justify-center w-full mx-auto"
        target="_blank"
        >
        <div className="w-full">
            <div className="relative flex flex-col m-auto flex-nowrap sm:flex-row">
            <input
                type="email"
                autoComplete="email"
                name="EMAIL"
                className="relative z-10 w-full min-w-0 px-4 py-3 mb-2 mr-2 font-semibold tracking-wide placeholder-gray-500 bg-white border-2 border-solid rounded-lg text-textBlack border-peppermint"
                id="mce-EMAIL"
                aria-label="Email Address"
                placeholder="Email"
                required
            />
            <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
            >
                <input
                type="text"
                name="b_4ac5129c0337bf44580e1f2b5_b438fc41d3"
                tabIndex={-1}
                defaultValue
                />
            </div>
            <br/><br/>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
            </div>
        </div>
        <div id="mce-responses" className="">
            <div
            className=""
            id="mce-error-response"
            style={{ display: "none" }}
            />
            <div
            className=""
            id="mce-success-response"
            style={{ display: "none" }}
            />
        </div>
    </form>
  </div>
)
