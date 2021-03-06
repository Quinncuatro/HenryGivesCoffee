import React from "react"
import { Link } from "gatsby"

export default () => ( <div>
  <div>
    --------------------------------------------
    <br />
    <Link to="/">[ Home ]</Link>&nbsp;
    <Link to="/winners/">[ Winners ]</Link>&nbsp;
    <Link to="/showcase/">[ Showcase ]</Link>&nbsp;<Link to="/rubric/">[ Rubric ]</Link>&nbsp;
    <br /><br />
    <Link to="/submission/">[ Submit a Project ]</Link>&nbsp;
    <Link to="/contact/">[ Contact ]</Link>&nbsp;
    <Link to="/patrons/">[ Patrons ]</Link>
    <br />
    --------------------------------------------<br />
    </div>
  </div>
)