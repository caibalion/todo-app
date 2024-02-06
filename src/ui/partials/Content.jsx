import InputBlock from '../blocks/InputBlock';
import TodoBlock from '../blocks/TodoBlock';

export default function Content() {
  return (
    <main className="grow basis-auto bg-gray-600 flex flex-col">
      <InputBlock />
      <TodoBlock />
    </main>
  );
}
