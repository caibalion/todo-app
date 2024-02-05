import InputBlock from '../blocks/InputBlock';
import TodoBlock from '../blocks/TodoBlock';

export default function Content() {
  return (
    <div className="grow basis-auto bg-[#1A1A1A] flex flex-col">
      <InputBlock />
      <TodoBlock />
    </div>
  );
}
