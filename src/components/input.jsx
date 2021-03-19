import React, { Component } from 'react';
import InputBtn from '../components/inputBtn';

class Input extends Component {
    state = {
        name : '',
    }
    
    onChange = (event) => {
        this.setState({name : event.target.value})
    }

    render() {
        return (
            <React.Fragment>
                <input className= "textInput" type="text" onChange={this.onChange} placeholder="Habit"/>
                <InputBtn
                    name = {this.state.name} 
                    onAdd = {this.props.onAdd}

                />
            </React.Fragment>
      );
    }
}

export default Input;