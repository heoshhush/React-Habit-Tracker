import React, { Component } from 'react';

class inputBtn extends Component {

    onAdd = () => {
        this.props.onAdd(this.props.name);
    }

    render() {
        return (
                <button className="inputBtn" onClick={this.onAdd}>Add</button>
        );
    }
}

export default inputBtn;