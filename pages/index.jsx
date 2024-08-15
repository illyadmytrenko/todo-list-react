import { useTasks } from "@/components/lib/use-tasks";
import { ModalCreateTask } from "@/components/modal-create-task";
import { Search } from "@/components/search";
import { SortBar } from "@/components/sort-bar";
import { FilterBar } from "@/components/filter-bar";
import { TaskList } from "@/components/task-list";
import { UiButton } from "@/components/uikit/ui-button";
import { useState } from "react";

export default function HomePage() {
  const [isCreatedModalTask, setIsCreatedModalTask] = useState(false);

  const {
    tasks,
    filteredTasks,
    setSearch,
    handleDeleteTask,
    handleClickTask,
    updateTasks,
    sortOrder,
    setSortOrder,
    filter,
    setFilter,
  } = useTasks();

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      {tasks.length > 0 && (
        <div className="rounded-sm mb-20 bg-slate-100 p-5 max-w-[90%] sm:w-[600px] max-h-[70vh] overflow-auto">
          <Search onSearchChange={(e) => setSearch(e.target.value)} />
          <SortBar setSortOrder={setSortOrder} className="mb-3" />
          <FilterBar setFilter={setFilter} className="mb-3" />
          <h1 className="text-center mb-3 text-3xl">Your Tasks:</h1>
          <TaskList
            filteredTasks={filteredTasks}
            handleClickTask={handleClickTask}
            handleDeleteTask={handleDeleteTask}
            sortOrder={sortOrder}
            filterCategory={filter}
          />
        </div>
      )}
      <UiButton
        className="p-3 bg-teal-400 rounded-lg hover:scale-125 transition-transform duration-300"
        onClick={() => setIsCreatedModalTask(true)}
      >
        Add New Task
      </UiButton>
      {isCreatedModalTask && (
        <ModalCreateTask
          onClose={() => {
            setIsCreatedModalTask(false);
            updateTasks();
          }}
        />
      )}
    </div>
  );
}
