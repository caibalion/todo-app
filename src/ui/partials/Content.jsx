import { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Task from '../components/Task';

export default function Content() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() === '') {
      alert('Insira uma tarefa válida.');
      return;
    }
    setTasks([...tasks, taskInput]);
    setTaskInput('');
  };
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <main className="grow basis-auto bg-gray-600 flex flex-col">
      {/*<Input Block>*/}

      <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto flex w-[46rem] h-14">
        <div className="grow-[2]">
          <input
            type="text"
            name="taskInput"
            value={taskInput}
            maxLength={170}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Adicione uma nova tarefa"
            className="w-full p-4 appearance-none rounded-lg  bg-gray-500 text-gray-300 focus:text-gray-100  outline-none border border-gray-700 focus:border-purple-dark"
          />
        </div>
        <button
          onClick={addTask}
          className="bg-blue-dark hover:bg-blue text-gray-100 p-4 rounded-lg ml-2 flex font-bold items-center gap-2 self-end"
        >
          Criar
          <FiPlusCircle />
        </button>
      </div>
      {/*<Input Block />*/}

      <div className="grow basis-auto bg-[#1A1A1A] flex">
        <div className="m-auto mt-20 w-[736px]">
          <div className="flex justify-between mb-6">
            <div className="text-[#4EA8DE]">
              Tarefas criadas
              <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">{`${tasks.length}`}</span>
            </div>
            <div className="text-[#8284FA]">
              Concluídas
              <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">0</span>
            </div>
          </div>
          <div className="h-[60dvh] overflow-y-scroll appearance-none">
            <ul>
              {tasks.map((task, index) => (
                <Task key={index} text={task} onDelete={() => deleteTask(index)} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
