import { useEffect, useState } from "react";

export function useCreateTask(onClose, modalRef) {
  const [userTask, setUserTask] = useState({
    task: "",
    deadline: "",
    category: "",
  });

  const [errors, setErrors] = useState({
    task: "",
    deadline: "",
    category: "",
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const clearData = () => {
    setUserTask({
      task: "",
      deadline: "",
      category: "",
    });
  };

  const handleCreateTask = () => {
    const newTask = {
      task: userTask.task,
      deadline: userTask.deadline,
      category: userTask.category,
      isCompleted: false,
    };

    const currentTasks = localStorage.getItem("userTasks");
    let tasksArray = [];

    if (currentTasks) {
      tasksArray = JSON.parse(currentTasks);
    }

    tasksArray.push(newTask);
    localStorage.setItem("userTasks", JSON.stringify(tasksArray));

    clearData();
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserTask((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeSelect = (option) => {
    const { name, value } = option;

    setUserTask((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      task: "",
      deadline: "",
      category: "",
    };

    if (!userTask.task) {
      newErrors.task = "Task is required.";
    } else if (/^\d+$/.test(userTask.task)) {
      newErrors.task = "Task cannot be only numbers.";
    }

    if (!userTask.deadline) {
      newErrors.deadline = "Deadline is required.";
    } else {
      const inputDate = new Date(
        userTask.deadline.split(".").reverse().join("-")
      );
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (inputDate < today) {
        newErrors.deadline = "Deadline cannot be in the past.";
      } else {
        const maxDate = new Date("2049-12-31");

        if (inputDate > maxDate) {
          newErrors.deadline =
            "Deadline cannot be later than December 31, 2049.";
        }
      }
    }

    if (!userTask.category) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  return {
    userTask,
    handleCreateTask,
    handleChange,
    handleChangeSelect,
    validateForm,
    errors,
  };
}
