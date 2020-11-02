import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

function Marker({Hello}) {


    return (
    
   <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{Hello}</p>
  </div>
    
    )
}

export default Marker
