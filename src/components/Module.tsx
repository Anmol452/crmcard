// @ts-nocheck
import React from 'react'
import { VscClose } from "react-icons/vsc"

const Module = (props) => {

    const boxarea:Record<string, string> = {
        
    }

    const closebtn = {
      position: 'absolute',
      left: '94%',
      top: '3%'
    }


  return (
    <>
       <div style={boxarea}>
        <h2 style={{position: 'relative', left: '3vh'}}>{props.moduletitle}</h2> <span style={closebtn} onClick={props.closebtn}><button>< VscClose /></button></span> 
        <p style={{position: 'relative', left: '3vh'}}>{props.moduledesc}</p>
       </div>

    </>
  )
}

export default Module
