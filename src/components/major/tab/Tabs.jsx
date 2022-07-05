import React, { Component } from 'react';

export default class Tabs extends Component {
    state ={
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
        this.setState({ activeTab: tab });
    };
    render() {
        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child =>{
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}
                <div className='flex flex-col gap-10'>
                    <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
                    <div className="tab-content">{content}</div>
                </div>
            </div>
        )
    }
}

const TabButtons = ({buttons, changeTab}) =>{
    return(
        <div className="inline-block rounded-md border w-fit">
            <table className='border-separate'>
                {buttons.map(button =>{
                    return <button className='first:border-r px-4 py-2' onClick={()=>changeTab(button)}>{button}</button>
                })}
            </table>
        </div>
    )
}
