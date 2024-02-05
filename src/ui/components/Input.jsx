export default function Input() {
  return (
    <div className="grow-[2]">
      <input
        maxLength={166}
        placeholder="Adicione uma nova tarefa"
        className="w-full p-4 appearance-none rounded-lg  bg-gray-500 text-gray-300 focus:text-gray-100  outline-none ring-2 ring-gray-700 focus:ring-2 focus:ring-purple-dark"
      />
    </div>
  );
}
