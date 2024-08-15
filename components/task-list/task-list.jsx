import clsx from "clsx";
import { TrashIcon } from "../modal-create-task/ui/trash-icon";

export function TaskList({
  filteredTasks,
  handleClickTask,
  handleDeleteTask,
  sortOrder,
  filterCategory,
}) {
  const filteredByCategory = filteredTasks.filter(
    (task) =>
      filterCategory === "All" ||
      filterCategory === undefined ||
      task.category === filterCategory
  );

  const sortedTasks = [...filteredByCategory].sort((a, b) => {
    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);

    if (sortOrder === "ascending") {
      return dateA - dateB;
    } else if (sortOrder === "descending") {
      return dateB - dateA;
    }

    return 0;
  });

  return (
    <ul className="flex flex-col gap-4">
      {sortedTasks.map((task, index) => (
        <li
          key={index}
          className={clsx(
            "flex items-center justify-between bg-amber-300 p-3 hover:scale-[1.03] transition-transform duration-300 cursor-pointer",
            { "bg-amber-300/60 backdrop-blur": task.isCompleted }
          )}
          onClick={() => handleClickTask(index)}
        >
          <div>
            <p className={clsx({ "line-through": task.isCompleted })}>
              Task: {task.task}
            </p>
            <br />
            <p className={clsx({ "line-through": task.isCompleted })}>
              To: {task.deadline}
            </p>
            <p className={clsx({ "line-through": task.isCompleted })}>
              Category: {task.category}
            </p>
          </div>
          <button onClick={(e) => handleDeleteTask(index, e)}>
            <TrashIcon className="hover:scale-125 transition-transform duration-300 cursor-pointer" />
          </button>
        </li>
      ))}
    </ul>
  );
}
