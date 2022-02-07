import React, { Component } from 'react';
import Tab from './Tab';
import './Tab.css'

export default class TabPanel extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedTabIndex: props.children.length === 0 ? null : 0
        };
    
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(index) {
    this.setState({
        selectedTabIndex: index
    });
    
    this.props.onTabChange(index);
    }

    _renderTabs() {
    let tabs = [];
    
    for (let i = 0; i < this.props.children.length; i++) {
        tabs.push(
        <Tab
            key={`tab-${i}`}
            label={this.props.children[i].props.title}
            index={i}
            isSelected={i === this.state.selectedTabIndex}
            onClick={this._handleClick} />
        );
    }

    return tabs;
    }
    
    _renderTabContent() {
        return this.props.children[this.state.selectedTabIndex].props.children;
    }

    render() {
        if (this.state.selectedTabIndex == null) {
            return 'nope';
        }
        return (
            <div className="tab-panel text-gray-300 flex flex-col gap-10">
                <div className="tab-panel__header text_poppins_400 flex justify-center gap-10 cursor-pointer">
                    {this._renderTabs()}
                </div>
                <div className="tab-panel__content">
                    {this._renderTabContent()}
                </div>
            </div>
        );
    }
}
