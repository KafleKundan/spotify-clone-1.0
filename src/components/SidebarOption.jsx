import React from 'react'
import "../styles/SidebarOption.css"

const SidebarOption = ({title, Icon}) => {
  return (
    <div className="sidebarOption">
        {/* Would only render if Icon is available */}
        {Icon && <Icon className="sidebarOption__icon"/>}

        {/* If Icon then Header else a p tag */}
        {Icon?(<h4>{title}</h4>): <p>{title}</p>}

    </div>
  )
}

export default SidebarOption