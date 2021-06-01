import React from 'react';


const Todo = props =>{
    const handleClick = () =>{
        props.toggleItem(props.item.id);
        console.log("Iam Clicked")
    }

    return(
         <div onClick ={handleClick}  className={`item ${props.item.completed ? 'completed':''}`}>
         {/* <div onClick ={handleClick} className={props.item.completed ? 'completed':''}> */}
            <p>{props.item.todo}</p>
        </div>
);
    
};

export default Todo;