import React, { Component } from 'react';

class Navbar extends Component {

    
    render() {
        const navCount = this.props.navCount;
        return (
            <div className="navBar">
                <i className="fas fa-leaf"></i>
                <span className= "navBar__title">Habit Tracker</span>
                <span className= "navBar__habitCount">{navCount}</span>
            </div> 
        );
    }
}

export default Navbar;