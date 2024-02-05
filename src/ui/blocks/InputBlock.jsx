import AddTaskButton from '../components/AddTaskButton';
import Input from '../components/Input';

export default function InputBlock() {
  return (
    <div className="flex">
      <Input />
      <AddTaskButton />
    </div>
  );
}
