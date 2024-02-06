export default function Input() {
  return (
    <div className="grow-[2]">
      <input
        maxLength={164}
        placeholder="Adicione uma nova tarefa"
        className="w-full p-4 appearance-none rounded-lg  bg-gray-500 text-gray-300 focus:text-gray-100  outline-none border border-gray-700 focus:border-purple-dark"
      />
    </div>
  );
}
