import React from "react"

export default () => (
  <div>
    <h2>Submission Form</h2>
    
form.html
<form
    action="https://Coffee.us1.list-manage.com/subscribe/post?u=4ac5129c0337bf44580e1f2b5&id=b438fc41d3"
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
