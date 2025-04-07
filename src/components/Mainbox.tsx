// @ts-nocheck

import React, { HtmlHTMLAttributes, useState, useEffect } from 'react';
// import { FcDocument } from "react-icons/fc";
import { FcRules, FcExpand, FcNext, FcPrevious } from "react-icons/fc"
import Mainheader from './Mainheader';
import Card from './Card';
import axios from "axios";
import Module from './Module';
import Dropara from './Dropara';
// import { DragDropContext } from 'react-beautiful-dnd';



type TaskStatus =
  | "TODO" | "INPROGRESS" | "REVIEW" | "DONE"
  | "TODO1" | "INPROGRESS1" | "REVIEW1" | "DONE1"
  | "TODO2" | "INPROGRESS2" | "REVIEW2" | "DONE2";

interface Task {
  card_id: string; // Consider using `number` if IDs are numeric
  card_title: string;
  card_desc: string;
  card_status: TaskStatus; // Ensures only valid statuses are used
  created_at?: string; // Optional property to track creation date
  updated_at?: string; // Optional property to track updates
  assigned_to?: string; // Optional property for user assignment
}


const Mainbox = () => {

  const url = "http://localhost:3000"

  const TODO = 'TODO'
  const INPROGRESS = 'INPROGRESS'
  const REVIEW = 'REVIEW'
  const DONE = 'DONE'

  const TODO1 = 'TODO1'
  const INPROGRESS1 = 'INPROGRESS1'
  const REVIEW1 = 'REVIEW1'
  const DONE1 = 'DONE1'

  const TODO2 = 'TODO2'
  const INPROGRESS2 = 'INPROGRESS2'
  const REVIEW2 = 'REVIEW2'
  const DONE2 = 'DONE2'

  const [facthdata1, setFacthdata1] = useState<string>('');
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [dragTask, setDragTask] = useState<Task | null>(null);
  const [acctivecard, setAcctivecard] = useState<Task | null>(null);



  const [heightcon1, setHeightcon1] = useState<string>('10v');
  const [heightcon2, setHeightcon2] = useState<string>('10v');
  const [heightcon3, setHeightcon3] = useState<string>('10v');

  const [showcard, setShowcard] = useState<string>('none');
  const [showcard2, setShowcard2] = useState<string>('none');
  const [showcard3, setShowcard3] = useState<string>('none');

  const [downchan1, setDownchan1] = useState<JSX.Element>(<FcExpand />);
  const [downchan2, setDownchan2] = useState<JSX.Element>(<FcExpand />);
  const [downchan3, setDownchan3] = useState<JSX.Element>(<FcExpand />);



  const [nmark, setNmark] = useState<JSX.Element>(<FcPrevious />);
  const [nmark2, setNmark2] = useState<JSX.Element>(<FcPrevious />);

  const [moduleshow, setModuleshow] = useState<string>('none');
  const [blur, setBlur] = useState<string>('blur(0rem)');
  const [modueldata, setModueldata] = useState<string>('');

  const [disflxl, setDisflxl] = useState<string>('flex');
  const [disflxl1, setDisflxl1] = useState<string>('flex');
  const [disflxl2, setDisflxl2] = useState<string>('flex');





  const val1 = () => {
    if (heightcon1 == '40vh') {
      setHeightcon1('5vh')
      setDownchan1(<FcExpand />)
      setShowcard('none')
      setDisflxl('none')
    } else {
      setHeightcon1('40vh')
      setDownchan1(<FcNext />)
      setShowcard('flex')
      setDisflxl('flex')
    }
  }



  const val2 = () => {
    if (heightcon2 == '40vh') {
      setHeightcon2('5vh')
      setDownchan2(<FcExpand />)
      setShowcard2('none')
      setDisflxl1('none')

    } else {
      setHeightcon2('40vh')
      setShowcard2('flex')
      setDownchan2(<FcNext />)
      setDisflxl1('flex')
    }

  }



  const val3 = () => {
    if (heightcon3 == '40vh') {
      setHeightcon3('5vh')
      setShowcard3('none')
      setDownchan3(<FcExpand />)
      setDisflxl2('none')
    } else {
      setHeightcon3('40vh')
      setShowcard3('flex')
      setDownchan3(<FcNext />)
      setDisflxl2('flex')
    }
  }




  const BoxStyle: Record<string, string> = {
    // background: "#fff",  // Fixed the typo
    height: "80vh",
    width: "100vw",
    position: "relative",
    boxShadow: "0px 0px 5px 0px #000",
    filter: blur
    // boxSize: 
  };


  const MainBox: Record<string, string> = {
    background: "#ededf0",  // Fixed the typo
    height: "76vh",
    width: "97vw",
    position: "relative",
    boxShadow: "2px 2px 4px 3px #000",
    top: "1.5vh",
    left: "1.5vw",
    overflowY: "auto",
    overflowX: "hidden"
  };




  const Main: Record<string, string> = {
    height: "10vh",
    width: "97vw",
    //  filter: 'blur(1.5rem)'
    // border: "solid red 1px"
  }



  const lare1: Record<string, string> = {
    height: heightcon1,
    width: "97vw",
    color: "#000",
    background: '#fff',
    margin: "3px 0",
    overflow: "auto",

  }



  const lare2: Record<string, string> = {
    height: heightcon2,
    width: "97vw",
    color: "#000",
    background: '#fff',
    margin: "3px 0",
    zIndex: '5',
    position: "relative"
  }



  const lare3: Record<string, string> = {
    height: heightcon3,
    width: "97vw",
    color: "#000",
    background: '#fff',
    margin: "3px 0"
  }


  const show: Record<string, string> = {
    // display: showcard,
    width: '25%',
    flexDirection: 'column'

  }



  const show2: Record<string, string> = {
    // display: showcard2,
    width: '25%',
    flexDirection: 'column'
  }



  const show3: Record<string, string> = {
    // display: showcard3,
    width: '25%',
    flexDirection: 'column'
  }

  const show4: Record<string, string> = {
    // display: showcard2,
    width: '25%',
  }



  const module: React.CSSProperties = {
    zIndex: 6,
    position: "fixed",
    background: "rgb(43 42 42)",
    height: "60vh",
    width: "84vw",
    left: "7vw",
    marginTop: "2vh",
    display: moduleshow,
    borderRadius: '11px',
    boxShadow: '0 0 5px 2px #000 '

  };


  const btnStyle: Record<string, string> = {
    background: '#00000069',
    color: 'black',
    height: '6vh',
    fontSize: '0.8rem'
  };


  //----------------------_---------d&D------0000------------------------------------





  const handelkewdown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const obj = {
        title: value,
        status: "TODO",
        id: Date.now(),
      };

      setTasks((prev: Task[]) => [...prev, obj]);
      setValue("");
    }
  };








  const handleDrag = (e: DragEvent, task: Task) => {
    e.dataTransfer?.setData("text/plain", task.card_id); // Optionally store task ID for drop event
    setDragTask(task);
  };









  // const handelOnDrag = (e: DragEvent, index: DragEvent): void => {
  //     const target = e.target as HTMLElement // Ensuring proper typing
  //     const status = target.getAttribute('data-status');


  //     // let lengthCard2 = document.getElementById('lengthCard2')

  //     console.log('Dropping:', status , 'postion: ' , index);

  //  // console.log(lengthCard?.childNodes.length)
  //      if (status === "TODO") {
  //       handleDragNDrop("TODO");
  //     } else if (status === "INPROGRESS") {
  //       handleDragNDrop("INPROGRESS");
  //     } else if (status === "REVIEW") {
  //       handleDragNDrop("REVIEW");
  //     } else if (status === "DONE") {
  //       handleDragNDrop("DONE");
  //     } else if (status === "TODO1") {
  //       handleDragNDrop("TODO1");
  //     } else if (status === "INPROGRESS1") {
  //       handleDragNDrop("INPROGRESS1");
  //     } else if (status === "REVIEW1") {
  //       handleDragNDrop("REVIEW1");
  //     } else if (status === "DONE1") {
  //       handleDragNDrop("DONE1");
  //     }else if (status === "TODO2") {
  //       handleDragNDrop("TODO2");
  //     } else if (status === "INPROGRESS2") {
  //       handleDragNDrop("INPROGRESS2");
  //     } else if (status === "REVIEW2") {
  //       handleDragNDrop("REVIEW2");
  //     } else if (status === "DONE2") {
  //       handleDragNDrop("DONE2");
  //     }
  // };

  // console.log('ok');


  const onDragOver = (e: DragEvent): void => {
    e.preventDefault();
  };






  let box1: HTMLElement | null = document.getElementById('box1');
  let mark1: HTMLElement | null = document.getElementById('mark1');

  const swipe = () => {

    //    console.log("ok");
    if (box1.style.width === "18vw") {
      box1.style.width = "60vw";
      mark1.style.left = '15vw'
      setShowcard('flex')
      setMark(<FcPrevious />)
    } else {
      box1.style.width = "18vw";
      mark1.style.left = '1vw'
      setShowcard('none')
      setNmark(<FcNext />)

    }
  }


  let box2: HTMLElement | null = document.getElementById('box2');
  let mark2: HTMLElement | null = document.getElementById('mark2');
  const swipe2 = () => {
    //    console.log("ok");
    if (box2.style.width === "15vw") {
      box2.style.width = "60vw";
      mark2.style.left = '15vw'
      setShowcard('flex')
      setMark2(<FcPrevious />)
    } else {
      box2.style.width = "18vw";
      mark2.style.left = '1vw'
      setShowcard('none')
      setNmark2(<FcNext />)
    }
  }


  let box3: HTMLElement | null = document.getElementById('box3');
  let mark3: HTMLElement | null = document.getElementById('mark3');
  const swipe3 = () => {
    if (box3.style.width === "18vw") {
      box3.style.width = "60vw";
      mark3.style.left = '15vw'
      setShowcard('block')
    } else {
      box3.style.width = "18vw";
      mark3.style.left = '1vw'
      setShowcard('none')
    }
  }


  let box4: HTMLElement | null = document.getElementById('box4');
  let mark4: HTMLElement | null = document.getElementById('mark4');
  const swipe4 = () => {


    if (box4.style.width === "18vw") {
      box4.style.width = "60vw";
      mark4.style.left = '15vw'
      setShowcard('block')
    } else {
      box4.style.width = "18vw";
      mark4.style.left = '1vw'
      setShowcard('none')
    }
  }

  // ______________________________________________________________________________


  // const onloaddata = async () => {
  //   await axios.get(")
  //   .then(res=>{
  //     setFacthdata1(res.data)
  //   }).catch((error:Error) => {console.log(error)})
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Task[]>(url);
        setTasks(response.data);
      } catch (err) {
        console.log("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs only on mount

  // Log state changes
  useEffect(() => {
    console.log("Updated tasks:", tasks);
  }, [tasks]);





  // Handle input change
  const handelchang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    // Example: Add a new task dynamically on input change (if needed)
    setTasks((prev) => [
      ...prev,
      { card_id: prev.length + 1, card_staus: "new", title: e.target.value },
    ]);
  };




  // Handle drag and drop
  const handleDragNDrop = async (status: Task["card_staus"]) => {
    if (!dragTask) return; // Ensure dragTask is not null before proceeding

    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.card_id === dragTask.card_id ? { ...item, card_staus: status } : item,
      )
    );


    try {
      // Send update request to the backend
      await axios.put(url, {
        card_id: dragTask.card_id,
        status: status,
      });

      // console.log(`Task ${dragTask.card_id} updated successfully`);
    } catch (error) {
      console.error("Failed to update task status", error);
    }


    setDragTask(null); // Reset the dragged task
  };



  if (loading) return <p>Loading...</p>;


  const handelclic = (task: Task) => {
    // modueldata , moduleshow 
    // task)
    setModuleshow('block')
    setBlur('blur(0.3rem)')
    return setModueldata(<Module moduletitle={task.card_title} moduledesc={task.card_desc} closebtn={closebtn} />)
  }

  const closebtn = () => {
    setModuleshow('none')
    setBlur('blur(0rem)')
  }

  // console.log(setModueldata.card_title);
  // console.log(setModueldata.card_desc);

  // const showbtn = () =>{}



  const onDrop = (status: DragEvent, position: DragEvent): void => {
    // const target = e.target as HTMLElement // Ensuring proper typing
    // const status = target.getAttribute('data-status');
    console.log(`this is a status : ${status} index : ${position}`);

    if (acctivecard == null || acctivecard == undefined) return;

    const tackTOMove = tasks[acctivecard];
    const updateTask = tasks.filter((task, index) => index !== acctivecard)
    console.log();


    updateTask.splice(position, 0, {
      ...tackTOMove,
      // task.card_status: status
    }
    )
    handleDragNDrop(status)


  }
  
  console.log("API URL:", import.meta.env.VITE_API_URL);
  



  //----------------------_---------------0000------------------------------------

  return (
    <>

      <span className="modulshow" style={module}> {modueldata} </span>
      <div className="box" style={BoxStyle} onChange={handelchang}>
        {/* <div className="blur" style={{height:'100vh', width:'100vw', filter: 'blur(1.5rem)'}}></div> */}
        <div className="mainbox" style={MainBox}>
          <Mainheader swipe={swipe} swipe2={swipe2} swipe3={swipe3} swipe4={swipe4} np={nmark} np2={nmark2} />
          {/* <h6 style={{color: "#000     "}}>acctiv  - : {acctivecard}</h6> */}

          <div className="main" style={Main}>


            <div className="lare1" style={lare1} >
              <span onClick={val1} style={{
                marginLeft: "15px",
                paddingRight: "15px"
              }}>{downchan1}</span> Andrew Fuller 1

              {/* drag and drop */}

              <div style={{
                display: disflxl
              }}>

                {/* //------------------------------------------------------------------------------------ */}

                <div className="todo" data-status={TODO} onDragOver={onDragOver} style={show} id="lengthCard1">
                  <Dropara onDrop={() => onDrop(TODO, 0)} />
                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === TODO &&
                      <React.Fragment key={task.card_id || index}>
                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={() => handelclic(task)} onDragStart={() => setAcctivecard(task.card_id)} onDragEnd={() => setAcctivecard(null)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'red'} />
                        </div>
                        <Dropara onDrop={() => onDrop(TODO, index + 1)} />

                      </React.Fragment>
                    ))
                  }



                </div>


                <div className="todo" data-status={INPROGRESS} onDragOver={onDragOver} style={show2} id="lengthCard2">

                  <Dropara onDrop={() => onDrop(INPROGRESS, 0)} />
                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === INPROGRESS &&
                      <React.Fragment key={task.card_id || index}>
                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={() => handelclic(task)} onDragStart={() => setAcctivecard(task.card_id)} onDragEnd={() => setAcctivecard(null)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(156 39 176)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(INPROGRESS, index + 1)} />
                      </React.Fragment>
                    ))
                  }
                </div>


                <div className="todo" data-status={REVIEW} onDragOver={onDragOver} style={show3} id="lengthCard3">


                  <Dropara onDrop={() => onDrop(REVIEW, 0)} />
                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === REVIEW &&
                      <React.Fragment key={task.card_id || index}>
                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={() => handelclic(task)} onDragStart={() => setAcctivecard(task.card_id)} onDragEnd={() => setAcctivecard(null)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(255 111 0)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(REVIEW, task.card_id + 1)} />
                      </React.Fragment>
                    ))
                  }
                </div>


                <div className="todo" data-status={DONE} onDragOver={onDragOver} style={show3} id="lengthCard4">

                  <Dropara onDrop={() => onDrop(DONE, 0)} />
                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === DONE &&
                      <React.Fragment key={task.card_id || index}>
                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} onDragStart={() => setAcctivecard(task.card_id)} onDragEnd={() => setAcctivecard(null)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'green'} />
                        </div>
                        <Dropara onDrop={() => onDrop(DONE, index + 1)} />

                      </React.Fragment>
                    ))
                  }
                </div>

              </div>

            </div>



            {/* //-------------------------------------------------------------- */}



            <div className="lare2" style={lare2}>
              <span onClick={val2} style={{
                marginLeft: "15px",
                paddingRight: "15px"
              }}>{downchan2} </span> Janet leverling 2




              <div style={{
                display: disflxl1

              }}>

                {/* //------------------------------------------------------------------------------------ */}

                <div className="todo" data-status={TODO1} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(TODO1, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === TODO1 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'red'} />
                        </div>
                        <Dropara onDrop={() => onDrop(TODO1, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={INPROGRESS1} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(INPROGRESS1, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === INPROGRESS1 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(156 39 176)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(INPROGRESS1, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={REVIEW1} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(REVIEW1, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === REVIEW1 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(255 111 0)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(REVIEW1, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={DONE1} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(DONE1, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === DONE1 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'green'} />
                        </div>
                        <Dropara onDrop={() => onDrop(DONE1, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>

              </div>





            </div>


 

            <div className="lare3" style={lare3}>
              <span onClick={val3} style={{
                marginLeft: "15px",
                paddingRight: "15px"
              }}>{downchan3}</span> margaret hamit 3


              <div style={{
                display: disflxl2
              }}>

                {/* //------------------------------------------------------------------------------------ */}

                <div className="todo" data-status={TODO2} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(TODO2, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === TODO2 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'red'} />
                        </div>
                        <Dropara onDrop={() => onDrop(TODO2, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={INPROGRESS2} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(INPROGRESS2, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === INPROGRESS2 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(156 39 176)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(INPROGRESS2, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={REVIEW2} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(REVIEW2, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === REVIEW2 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'rgb(255 111 0)'} />
                        </div>
                        <Dropara onDrop={() => onDrop(REVIEW2, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>


                <div className="todo" data-status={DONE2} onDragOver={onDragOver} style={show}>
                  <Dropara onDrop={() => onDrop(DONE2, 0)} />

                  {
                    tasks.length > 0 && tasks.map((task, index) => (
                      task.card_staus === DONE2 &&
                      <React.Fragment key={task.card_id || index}>

                        <div className="task-item" onDrag={(e) => handleDrag(e, task)} onClick={(e) => handelclic(task)} draggable > <Card title={task.card_title.slice(0, 15)} desc={task.card_desc.slice(0, 20)} col={'green'} />
                        </div>
                        <Dropara onDrop={() => onDrop(DONE2, index + 1)} />
                      </React.Fragment>

                    ))
                  }
                </div>

              </div>

            </div>



          </div>
        </div>
      </div>


    </>


    // <FcDocument />
  )
}

export default Mainbox
