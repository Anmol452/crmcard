import React, { useState } from 'react'

const Header = () => {

  


  const headerStyle:Record<string, string> = {
    background: "#000",  // Fixed the typo
    height: "20vh",
    width: "100vw",
    position: "relative",
    top: "0",
    color: '#fff'
};


  return (
    <>
      <header style={headerStyle}>
        this is header area
      </header>
    </>
  )
}

export default Header
