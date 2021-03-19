import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Input from './components/input';
import Navbar from './components/navbar';

class App extends Component {

  state = {
    habits : [
        {id: 12131213, name: 'Running', count: 0},
        {id: 2234234, name: 'Learning', count: 0},
        {id: 312312312, name: 'Reading', count: 0}
    ],
    navCount : 0,
}

onIncrete = (habit) => {
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count++;
  this.setState({habits: habits}); // 그냥 this.setState(habits)했었음. 하지만, this.setState({habits : habits})로 해야함.
}

onDecrete = (habit) => {
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  habits[index].count--;
  habits[index].count = habits[index].count < 0 ? 0 : habits[index].count;
  this.setState({habits: habits});

  // state가 바뀌는 그 아래 컴포넌트의 render가 모두 실행된다는 것을 응용한 것!
}

onDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id )
  this.setState({habits : habits});
}

onAdd = (name) => {
  console.log('hi');
  const habits = [...this.state.habits];
  habits.push({id: habits.length, name: name, count:0})
  this.setState({habits: habits})
}

onChangeNavCount = () => {
  const countHabits = this.state.habits.filter(item => item.count > 0)
  this.setState({navCount : countHabits.length})
}

allReset = () => {
  const habits = [];
  this.setState({habits : habits})
}

  render(){
    return (
      <>
        <Navbar 
          navCount = {this.state.navCount}
          />
        <Input 
          onAdd = {this.onAdd}
          />
        <Habits 
          habits = {this.state.habits}
          onIncrete = {this.onIncrete}
          onDecrete = {this.onDecrete}
          onDelete = {this.onDelete}
          onChangeNavCount = {this.onChangeNavCount}
          allReset = {this.allReset}
          />
      </>
    )
  }


}

export default App;
