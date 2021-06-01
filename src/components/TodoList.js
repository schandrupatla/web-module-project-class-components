// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from './Todo';
//some changes gor vercel
const TodoList = props =>{
    const handleClick =() =>{
        props.clearCompleted();
    }


    return(
        <div className ="Todo-list">
            {props.itemLists.map(item => (
                <Todo key={item.id} toggleItem={props.toggleItem} item={item}/>
            ))}
            <button onClick={handleClick} className="clear-btn">
                Clear Completed
            </button>
        </div>
    );
};
export default TodoList;