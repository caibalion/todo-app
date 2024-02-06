import Checkbox from '../components/Checkbox';
import DeleteButton from '../components/DeleteButton';

export default function Task() {
  return (
    <li className="w-[100%] h-[4.5rem] p-4 mb-3 bg-[#262626] border border-[#333] rounded-lg text-[#F2F2F2] leading-5 shadow-md">
      <div className="flex gap-2">
        <Checkbox />
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A velit quam vitae
          necessitatibus? Voluptate velit explicabo quos beatae fuga, rerum aliquid eveniet. Nisi
        </span>
        <DeleteButton />
      </div>
    </li>
  );
}
