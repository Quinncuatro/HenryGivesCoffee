import React from "react"
import pageNotFoundStyles from "./pageNotFound.module.css"
import Footer from "../Footer"

export default () => (
  <div>
    <p>[hquinn@HenryGives ~]$ &nbsp;cd /var/www/PageNotFound</p>
    <br />
    <div>
      <div>
        <h3 className={pageNotFoundStyles.noSuchFile}>bash: cd: /var/www/index.php: No such file or directory</h3>
        <br />
        <h3 className={pageNotFoundStyles.noSuchFile}>404: Check out another page in the menu, though!</h3>
      </div>
      <Footer />
    </div>
  </div>
)
