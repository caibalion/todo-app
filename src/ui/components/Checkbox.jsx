import { useState } from 'react';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button className="appearance-none m-[0.375rem] p-0 h-[1.125rem]" onClick={toggleCheckbox}>
      {isChecked ? (
        <FaCheckCircle className="w-[1.125rem] h-full text-purple-dark hover:text-purple" />
      ) : (
        <FaRegCircle className="w-[1.125rem] h-full text-blue hover:text-blue-dark" />
      )}
    </button>
  );
}
