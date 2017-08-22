import React from 'react'

let Buttons = (props) => {

  return (
    <div id="buttonWrapper">
      <a  onClick={props.showRecent} className="waves-effect waves-light btn">Recent</a>
      <a  onClick={props.showAllTime} className="waves-effect waves-light btn">All time</a>
    </div>
  )
}
export default Buttons
