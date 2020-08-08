import React from 'react'
import {Layout,Drawer,Navigation,Header,Content} from 'react-mdl'
import './draw.css'
function Draw() {
    return (
        <div className="draw">
          <div className="demo-big-content">
    <Layout>
       
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                    
                    
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
        </div>
    )
}

export default Draw
