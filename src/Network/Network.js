import React from 'react'
import './network.css'
import Countup from "react-countup";
function Network() {
    return (
        <div className="before__network">
        <div className="network">
            <div className="network__top">

            <h1>RANE NETWORK STATS</h1>
            </div>

            <div className="network__bottom">

            <div className="network_left">
                <h1> <Countup start={0} end={7124} duration={2.5} seperator="," /></h1>
                <h6>Global Network Reach</h6>
            </div>

            <div className="network_right">
                <h1> <Countup start={0} end={25867} duration={2.5} seperator="," /></h1>
                <h6>Knowledge Center Articles</h6>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Network
