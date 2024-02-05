import AddTaskButton from '../components/AddTaskButton';
import Input from '../components/Input';

export default function InputBlock() {
  return (
    <div className="m-auto flex w-[46rem] h-14">
      <Input />
      <AddTaskButton />
    </div>
  );
}
