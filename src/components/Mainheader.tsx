import React, { useState, props } from 'react'
import { FcRules, FcPrevious, FcNext, FcProcess , FcSynchronize } from "react-icons/fc"

const Mainheader = (props) => {
    const [hi, setHi] = useState<string>('');
    

    const boxheader: Record<string, string>  = {
        height: "5vh",
        // width: "12vw",
        width: "60vw",
        color: "rgb(0, 0, 0)",
        background: "aliceblue",
        padding: "5px",
        margin: "-9px 10px 0 -29px"
    }

    const clickToMove = () => {

    }

    const ulstyle:Record<string, string> = {
            display: "flex",
            listStyle: "none"
    }



    return (
        <>
            <div className="box">
                <ul style={{display: "flex", listStyle:"none"}}>
                    <li className="boxheader" style={boxheader} id="box1" onClick={props.swipe}>  <span><FcRules />        </span> <span>To Do       </span> <span onClick={clickToMove} style={{ position: 'relative',left: '15vw'}} id='mark1'> {props.np}    </span></li>
                    <li className="boxheader" style={boxheader} id="box2" onClick={props.swipe2}> <span><FcProcess />      </span> <span>In Progress </span> <span onClick={clickToMove} style={{ position: 'relative',left: '13vw'}} id='mark2'>  {props.np2}  </span></li>
                    <li className="boxheader" style={boxheader} id="box3" onClick={props.swipe3}> <span><FcSynchronize />  </span> <span>In Review   </span> <span onClick={clickToMove} id='mark3'> <FcNext /> </span></li>
                    <li className="boxheader" style={boxheader} id="box4" onClick={props.swipe4}> <span><FcRules />        </span> <span>Done        </span> <span onClick={clickToMove} id='mark4'> <FcNext /> </span></li>
                </ul>


            </div>
        </>
    )
}

export default Mainheader
