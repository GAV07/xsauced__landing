import React from 'react'

const Typeform = () => {
    (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()

    return (
        <>
        <a class="typeform-share button" href="https://form.typeform.com/to/wsWQIHTv?typeform-medium=embed-snippet" data-mode="drawer_right" target="_blank">Launch me </a> 
        </>
    )
}

export default Typeform