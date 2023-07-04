import React from 'react'


interface TaskProps {
    id: number;
    title: string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ id, title, completed, onDelete, onToggle }) => {
    const handleDelete = () => {
        onDelete(id);
    }

    const handleToggle = () => {
        onToggle(id);
    }

    return (
        <div className={`task ${completed ? 'completed': ''}`}>
                <input type="checkbox" checked={completed} onChange={handleToggle} />
                <span>{title}</span>
                <button onClick={handleDelete} >Delete</button>
        </div>
    )
}


export default TaskItem