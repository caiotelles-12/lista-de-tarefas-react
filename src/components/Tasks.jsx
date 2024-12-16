import { TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-gray-900 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-700  w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "bg-green-700"
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-red-700 hover:bg-red-500 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
