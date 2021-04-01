import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import MenuBar from "../MenuBar"
import LoginText from "../LoginText"
import "prismjs/themes/prism-twilight.css"
import layoutStyles from "./layout.module.css"

export default ({ children }) => (
  <div className={layoutStyles.terminalWindow}>
    <Helmet>
      <meta name="description" content="Micro-Scholarships for Rad Web Shit" />
      <meta name="keywords" content="Henry, Quinn, Gives, Coffee, Web, Development, Rad, JavaScript, JS, CSS, HTML" />
      <meta charset="UTF-8" />
      <html lang="en" />
      <title>Henry Gives Coffee</title>
    </Helmet>
    <Header />
    <section className={layoutStyles.terminal}>
      <LoginText />
      <br />
      <MenuBar />
      {children}
    </section>
  </div>
)
