import React from 'react'
import './props.css'
import ProsCard from './ProsCard'
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
function Pros() {
    return (
        <div className="pros">

            <div className="props__title">
                        <h5>RANE’s community enables risk and security professionals to more efficiently respond to emerging threats and manage complex risk.</h5>        
            </div>

            <div className="pros__card">
                        <ProsCard Icon={WbIncandescentIcon}/>
                        <ProsCard Icon={HowToRegIcon}/>
                        <ProsCard Icon={NetworkCheckIcon}/>

            </div>
            
        </div>
    )
}

export default Pros
