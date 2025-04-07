// @ts-nocheck

import React from 'react'

const Card = (props) => {


  


    const cardStyle:Record<string, string> = {
        background: "rgb(255, 255, 255)",
        height: "29vh",
        width: "19vw",
        position: "relative",
        color: "rgb(0, 0, 0)",
        left: "10px",
        borderLeft: `solid 3px ${props.col}`,
        borderRadius: "7px",
        boxShadow: "0 0 3px #000",
        padding: "1px 0px 7px 7px",
        fontSize: "0.9rem"
    };

   

    const showdosStyle:Record<string, string> = {
        height: "34vh",
        alignContent: "center",
        // background: "#d3d8e48c",
        width: "22vw",
        borderRadius: "9px",
    };



  return (
    <>
    <div style={showdosStyle}>

            
      <div className="box" style={cardStyle} draggable="true" >
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        
        {/* <button style={btnStyle}>bug</button> <button style={btnStyle}>custmer</button> */}
          {props.btn}
      </div>
      </div>
      {/* <div className="on">{props.title}</div> */}
    </>
  )
}

export default Card
