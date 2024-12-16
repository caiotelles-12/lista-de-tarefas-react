import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");

  return (
    <div className="space-y-4 p-6 bg-gray-900 rounded-md shadow-lg flex flex-col mb-2 mt-4">
      <input
        type="text"
        placeholder="Digite a tarefa..."
        className="border-none outline-none p-2 px-4 rounded-md bg-slate-700 text-white text-lg"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <button
        onClick={() => {
          // VERIFICANDO SE O INPUT ESTÁ PREENCHIDO
          if (!title.trim()) {
            setTitle("");
            return alert("Preencha o campo em branco!");
          }

          onAddTaskSubmit(title), setTitle("");
        }}
        className=" rounded-md bg-slate-800 transition easy-in-out delay-100 hover:bg-slate-600 duration-300... text-white px-4 py-2 text-lg"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
