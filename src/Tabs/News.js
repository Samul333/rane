import React, { Component } from 'react'
import {Tabs,Tab} from 'react-mdl'
import Upcoming from './Tabs_inside/Upcoming';
import Featured from './Tabs_inside/Featured';
class News extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    renderContent=()=>{
        if(this.state.activeTab==0) return <Upcoming/>
        else if(this.state.activeTab==2) return <Upcoming/>
        else if(this.state.activeTab==1) return <Featured/>


    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Upcoming news</Tab>
                    <Tab>Featured Expert</Tab>
                    <Tab>Featured Content</Tab>
                </Tabs>
                <section>
        <div className="content">{this.renderContent()}</div>
                </section>
            </div>    
        );
    }
}

export default News;