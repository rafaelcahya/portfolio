import React, { Component } from 'react';

export default class Tab extends Component {
    constructor(props) {
        super(props);
    
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        this.props.onClick(this.props.index);
    }
    render() {
        const tabClassName = this.props.isSelected ? 'tab tab--selected' : 'tab';
        return (
            <span className={tabClassName} onClick={this._handleClick}>
                <span className="tab__label">{this.props.label}</span>
            </span>
        )
    }
}
