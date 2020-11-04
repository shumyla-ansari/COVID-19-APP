import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

function Marker({onClickPin, title}) {

  function MouseOver({title}){
    return(
      
        <p className="pin-text">{title}</p>
    )
  }

    return (
    
   <div className="pin">
    <Icon  onClick={(e) => onClickPin(e)} icon={locationIcon} className="pin-icon"
     onMouseOver={MouseOver}/>

  </div>
    
    )
}

export default Marker
