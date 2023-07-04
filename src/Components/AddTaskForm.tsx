import React, {useState} from 'react'

interface AddTaskFormProps {
    onAdd: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({onAdd}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(title.trim() !== '') {
            onAdd(title);
            setTitle('');
        }   
    }

    return (
        <form className='add-task-form' onSubmit={handleSubmit}>

            <input type="text" placeholder='Add a task' value={title} onChange={(e) => setTitle(e.target.value)} />

            <button type='submit'>Add Task</button>

        </form>
    )
}


export default AddTaskForm