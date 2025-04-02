import React, {useState} from 'react'

import './drop.css'
  
const Dropara = ({onDrop}) => {

    const [showDrop, setShowDrop] = useState<boolean>(false);
    
    // const {onDrag} = props

    // 

  return <section  className={showDrop ? "dropara" : "hide_card"}
   onDragEnter={() => setShowDrop(true)} 
   onDrop = {() =>{ 
    onDrop();
      setShowDrop(false)
      
   }}
   onDragOver={e=> e .preventDefault()}
    onDragLeave={()=> setShowDrop(false)}> Drop Here</section>
}

export default Dropara
 