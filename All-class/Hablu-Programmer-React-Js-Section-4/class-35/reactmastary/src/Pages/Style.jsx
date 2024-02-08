import React from 'react'
import "./Style.css"
import moduleCss from './Hublu.module.css'

function Style() {
  return (
    <div>
      <h1 className='exterNalCss'>Style  ExterNal CSS </h1>
      <h4> Style Extarnal Css plm</h4>
      <h3 className={moduleCss.modulecss}>style External class plm</h3>
      <h2 className={moduleCss.modulecss}>this is css</h2>
      <button className={moduleCss.ariful}>Click Me Module css</button>
    </div>
  )
}

export default Style
