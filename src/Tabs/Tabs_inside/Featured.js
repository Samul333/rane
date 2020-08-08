import React from 'react'
import './tab.css'
import {data} from './data'
function Featured() {
    return (
        <div className="featured">
                <div className="featured_header">
                    <div>

                    <img 
                    className="featured_image"
                    src="https://marketing-production.cdn.ranenetwork.com/wp-content/uploads/2020/07/15140449/james-giordano.jpg"/>
                    </div>
                    <div>

                    <h6 style={{color:'blue'}}>Dr. James Giordano</h6>
                    <h6 style={{textAlign:'left',marginLeft:'20px'}}>Professor, Departments of Neurology and Biochemistry; Chief, Neuroethics Studies Program, Pellegrino Center for Clinical Bioethics at Georgetown University</h6>
                    </div>
                </div>
                <div className="featured_bottom">
                    {data}
                </div>
        </div>
    )
}

export default Featured
