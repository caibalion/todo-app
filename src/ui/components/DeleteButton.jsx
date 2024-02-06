import { GoTrash } from 'react-icons/go';
export default function DeleteButton({ onDelete }) {
  return (
    <button
      onClick={onDelete}
      className="appearance-none rounded p-0 h-6 w-6 flex text-gray-300 hover:text-danger hover:bg-gray-400"
    >
      <GoTrash className="m-auto" />
    </button>
  );
}
