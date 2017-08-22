import React from 'react'
import Buttons from './switchButton'
let Header = (props) => {
  return (
    <div id="header"><h1 className="centerdIndex header">FCC Leader Board</h1>
        <Buttons showAllTime={props.showAllTime} showRecent={props.showRecent} />
    </div>
  )
}
export default Header
