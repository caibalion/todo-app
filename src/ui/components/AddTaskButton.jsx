import { FiPlusCircle } from 'react-icons/fi';
export default function AddTaskButton() {
  return (
    <button className="bg-blue-dark hover:bg-blue text-gray-100 p-4 rounded-lg ml-2 flex font-bold items-center gap-2 self-end">
      Criar
      <FiPlusCircle />
    </button>
  );
}
