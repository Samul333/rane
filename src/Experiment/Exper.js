import React,{useState} from 'react'
import ShowPlatfrom from '../ShowDropDown/ShowPlatfrom'
import ShowServices from '../ShowDropDown/ShowServices'
import {AnimatePresence,motion} from 'framer-motion'
import Draw from '../Drawer/Draw'
import './exp.css'

function Exper() {
    
    const[show,setShow] = useState(false)
    const[showServices,setShowServices] =  useState(false)
    const setShowPlatform =(state)=>{
        setShow(state)
    }
    return (
        <div className="main_navigation" >
            <div  className="nav_bar">
                <div className="rane_logo">
                    <img 
                    className="logo_img"
                    src="https://ranenetwork.com/wp-content/themes/rane/img/logo.png"/>
                </div>

             <div className="nav_options">

            <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}><h1>Platform</h1></div>
            <div onMouseEnter={()=>setShowServices(true)} onMouseLeave={()=>setShowServices(false)}><h1>Services</h1></div>
            <div onMouseEnter={()=>setShowServices(true)} onMouseLeave={()=>setShowServices(false)}><h1>About</h1></div>
            <div><h1>Contact</h1></div>
            <div onMouseEnter={()=>setShowServices(true)} onMouseLeave={()=>setShowServices(false)}><h1>Products</h1></div>
            <div ><h1>Login</h1></div>
            </div>
             </div>

        <AnimatePresence>

    {show?      <motion.div 
            exit={{opacity:0}} animate={{opacity:1}} initial={{opacity:0}}
    onMouseEnter={()=>setShow(true)}  onMouseLeave={()=>setShow(false)}>
    <ShowPlatfrom setShow={(state)=>setShowPlatform(state)}/>
            </motion.div>
           :null}
        </AnimatePresence>


<AnimatePresence>


{showServices? <motion.div 
            exit={{opacity:0}} animate={{opacity:1}} initial={{opacity:0}} onMouseEnter={()=>setShowServices(true)}  onMouseLeave={()=>setShowServices(false)} >
        <ShowServices/>
        </motion.div>
    :null

   }
        </AnimatePresence>       
       
       
        </div>
      


    )
}

export default Exper
