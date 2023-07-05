interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface AddTaskFormProps {
  onAdd: (title: string) => void;
}

export interface TaskProps {
  id: number;
  title: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}
