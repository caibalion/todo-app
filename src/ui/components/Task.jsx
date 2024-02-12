import { useState } from 'react';

import Checkbox from './Checkbox';
import DeleteButton from './DeleteButton';

export default function Task({ text, onDelete, index }) {
  const [taskCount, setTaskCount] = useState(0);
  const taskCounter = () => {
    setTaskCount(taskCount + 1);
    console.log(taskCount);
  };
  return (
    <li className="w-[100%] h-[4.5rem] p-4 mb-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] leading-5 shadow-md">
      <div className="flex gap-2">
        <Checkbox taskCounter={taskCounter} />
        <span className="grow-[2]">{text}</span>
        <DeleteButton onDelete={() => onDelete(index)} />
      </div>
    </li>
  );
}
