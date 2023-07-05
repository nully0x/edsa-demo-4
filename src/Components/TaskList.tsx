import React from "react";
import TaskItem from "./TaskItem";
import { TaskListProps } from "../utils/interface";




const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
