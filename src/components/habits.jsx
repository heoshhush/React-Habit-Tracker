import React, { Component } from 'react';
import Habit from '../components/habit';

class Habits extends Component {




    render() {
        return (
            <ul>
                {this.props.habits.map(habit => 
                (<Habit 
                    key = {habit.id}
                    habit = {habit}
                    onIncrete = {this.props.onIncrete}
                    onDecrete = {this.props.onDecrete}
                    onDelete = {this.props.onDelete}
                    onChangeNavCount = {this.props.onChangeNavCount}
                    />)
                )}
                <button className="allReset" onClick={this.props.allReset}>All Reset</button>
            </ul>
            
        );
    }
}

export default Habits;