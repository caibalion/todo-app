import Task from './Task';

export default function TodoBlock() {
  return (
    <div className="grow basis-auto bg-[#1A1A1A] flex">
      <div className="m-auto mt-20 w-[736px]">
        <div className="flex justify-between mb-6">
          <div className="text-[#4EA8DE]">
            Tarefas criadas
            <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">0</span>
          </div>
          <div className="text-[#8284FA]">
            Concluídas
            <span className="ml-2 rounded-full bg-[#333333] text-[#D9D9D9] py-[2px] px-2">0</span>
          </div>
        </div>
        <div className="h-[60dvh]">
          <ul>
            <Task />
          </ul>
          {/*           <ul>
            {tasks.map((task, index) => (
              <Task key={index} text={task} onDelete={() => deleteTask(index)} />
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}
