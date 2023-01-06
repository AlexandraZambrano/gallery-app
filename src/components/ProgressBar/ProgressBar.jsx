import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = ({ file, setFile }) => {
  return (
    <div>
      <div className="progress-bar" style={{width: Progress}}>progress</div>
    </div>
  )
}

export default ProgressBar
