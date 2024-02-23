import { useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-[10%] rounded-s-lg hover:bg-purple-dark transition ease-in-out delay-150 hover:scale-110 duration-100">
      <button className="w-full h-full "></button>
    </div>
  );
}
