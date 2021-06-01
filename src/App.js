import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'



const itemLists = [
  {
    todo: 'Learn SetState()',
    id: 123,
    completed: false
  },
  {
    todo: 'Style my Todo List',
    id: 124,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
    itemLists:itemLists
  }
}

toggleItem =(id) =>{
  const newItemLists = this.state.itemLists.map(item =>{
    if(item.id === id){
      return {
        ...item, completed:!item.completed
      }
    }else {
      return (item);
    }
  })
  this.setState({
    itemLists:newItemLists
  });
}

addItem = (title) =>{
  const newItem = {
    todo: title,
    id: this.state.itemLists.length,
    completed: false
  };
  this.setState({
    itemLists: [...this.state.itemLists, newItem]
  })
}

clearCompleted =()=>{
  const newItemLists = this.state.itemLists.filter(item =>{
    return(item.completed === false);
  });
  console.log(newItemLists);
  this.setState({
    itemLists: newItemLists
  })
}

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addItem = {this.addItem}/>
        </div>
        <TodoList clearCompleted={this.clearCompleted} toggleItem= {this.toggleItem} itemLists={this.state.itemLists} />
      </div>
    );//return
  }//render
}//class

export default App;
