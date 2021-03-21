import React, { Component } from 'react';

class Habit extends Component {
    onClickIncrease = () => {
        this.props.onIncrete(this.props.habit);
        this.props.onChangeNavCount();
    }
    onClickDecrease = () => {
        this.props.onDecrete(this.props.habit);
        this.props.onChangeNavCount();
    }
    onClickDelete = () => {
        this.props.onDelete(this.props.habit);
        this.props.onChangeNavCount();
    }

    render() {
        const {name, count} = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.onClickIncrease}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.onClickDecrease}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.onClickDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;