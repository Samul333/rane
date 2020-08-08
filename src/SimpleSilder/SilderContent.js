import React from 'react'
import './slider.css'
function SilderContent({img,title,subtitle}) {
    return (
        <div className="slidercontent">
            <div >
                <img  className="slidercontent__image"src={img}/>
            </div>
            <div className="slidercontent__writing">
    <h3>{title}</h3>
    <hr/>
    <h5>{subtitle}</h5>
    <button className="slidercontent_button">GET STARTED</button>
            </div>

        </div>
    )
}

export default SilderContent
