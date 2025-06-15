// import React from "react";

// const TodoItem = ({ task, onToggle, onDelete }) => {
//   return (
//     <li className={`task ${task.completed ? "done" : ""}`}>
//       <span onClick={() => onToggle(task.id)}>{task.text}</span>
//       <button onClick={() => onDelete(task.id)}>🗑</button>
//     </li>
//   );
// };

// export default TodoItem;
import React from "react";
import "./App.css"

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className= {`task ${task.completed ? "done" : ""} inputBox`} i>
      
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="checkBox"
        />
        <span className="taskName">{task.text}</span>

        <div className="deleteBtn">
            <button className="deleteBtn" onClick={() => onDelete(task.id)}>
            <img src="../public/image.svg" alt="Delete" />
            </button>
        </div>
        
    </li>
  );
};

export default TodoItem;
