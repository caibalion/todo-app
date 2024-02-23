import { GoTrash } from 'react-icons/go';
export default function DeleteButton({ onDelete }) {
  return (
    <div className="w-[10%] rounded-e-lg text-danger transition ease-in-out delay-150 duration-300 hover:bg-danger hover:text-gray-100">
      <button className="w-full h-full" onClick={onDelete}>
        <GoTrash className="m-auto" />
      </button>
    </div>
  );
}
