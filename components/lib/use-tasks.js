import { useState, useEffect } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    const userTasks = localStorage.getItem("userTasks");
    let tasksArray = [];
    if (userTasks) {
      tasksArray = JSON.parse(userTasks);
    }
    setTasks(tasksArray);
  }, []);

  const handleDeleteTask = (index, event) => {
    event.stopPropagation();
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
    localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  };

  const handleClickTask = (index) => {
    const clickedTask = tasks[index];
    const updatedTask = {
      ...clickedTask,
      isCompleted: !clickedTask.isCompleted,
    };
    const updatedTasks = tasks.map((task, taskIndex) =>
      taskIndex === index ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  };

  const updateTasks = () => {
    const userTasks = localStorage.getItem("userTasks");
    let tasksArray = [];
    if (userTasks) {
      tasksArray = JSON.parse(userTasks);
    }
    setTasks(tasksArray);
  };

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(search.toLowerCase())
  );

  return {
    tasks,
    search,
    filteredTasks,
    setSearch,
    handleDeleteTask,
    handleClickTask,
    updateTasks,
    sortOrder,
    setSortOrder,
    filter,
    setFilter,
  };
}
