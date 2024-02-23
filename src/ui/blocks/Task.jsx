import Checkbox from '../components/Checkbox';
import DeleteButton from '../components/DeleteButton';

export default function Task() {
  return (
    <li className="w-[100%] h-[4.5rem] mb-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] leading-5 shadow-md">
      <div className="flex h-full gap-1">
        <Checkbox />
        <span className="w-[80%]"></span>
        <DeleteButton />
      </div>
    </li>
  );
}
