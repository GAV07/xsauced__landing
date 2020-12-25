import React, { useEffect, useRef } from 'react'
import * as typeformEmbed from '@typeform/embed'


const Typeform = () => {
    const typeformRef = useRef(null)
    
    useEffect(() => {
      const popup = typeformEmbed.makePopup('https://erickgavin7.typeform.com/to/wsWQIHTv', {
        mode: 'drawer_right',
        hideFooter: true,
        hideHeaders: true,
        hideScrollbars: true,
        opacity: 50,
      })
      typeformRef.current.addEventListener('click', function() {popup.open()})
    }, [])
  
    return <a ref={typeformRef} id="typeform">Join Waitlist</a>
  }

export default Typeform