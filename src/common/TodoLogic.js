import { useState } from 'react';

export default function TodoLogic() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') {
      alert('Insert a valid task.');
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };
}
const deleteTask = (index) => {
  const newTasks = [...tasks];
  newTasks.splice(index, 1);
  setTasks(newTasks);
};
export { deleteTask, addTask };
