import AddTaskButton from '../components/AddTaskButton';
import Input from '../components/Input';

export default function InputBlock() {
  return (
    <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto flex w-[46rem] h-14">
      <Input />
      <AddTaskButton />
    </div>
  );
}
