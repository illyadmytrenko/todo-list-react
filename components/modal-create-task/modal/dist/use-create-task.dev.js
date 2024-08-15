"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCreateTask = useCreateTask;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useCreateTask(onClose, modalRef) {
  var _useState = (0, _react.useState)({
    task: "",
    deadline: "",
    category: ""
  }),
      _useState2 = _slicedToArray(_useState, 2),
      userTask = _useState2[0],
      setUserTask = _useState2[1];

  var _useState3 = (0, _react.useState)({
    task: "",
    deadline: "",
    category: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  var clearData = function clearData() {
    setUserTask({
      task: "",
      deadline: "",
      category: ""
    });
  };

  var handleCreateTask = function handleCreateTask() {
    var newTask = {
      task: userTask.task,
      deadline: userTask.deadline,
      category: userTask.category,
      isCompleted: false
    };
    var currentTasks = localStorage.getItem("userTasks");
    var tasksArray = [];

    if (currentTasks) {
      tasksArray = JSON.parse(currentTasks);
    }

    tasksArray.push(newTask);
    localStorage.setItem("userTasks", JSON.stringify(tasksArray));
    clearData();
    onClose();
  };

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUserTask(function (prevFormData) {
      return _objectSpread({}, prevFormData, _defineProperty({}, name, value));
    });
  };

  var handleChangeSelect = function handleChangeSelect(option) {
    var name = option.name,
        value = option.value;
    setUserTask(function (prevFormData) {
      return _objectSpread({}, prevFormData, _defineProperty({}, name, value));
    });
  };

  var validateForm = function validateForm() {
    var newErrors = {
      task: "",
      deadline: "",
      category: ""
    };

    if (!userTask.task) {
      newErrors.task = "Task is required.";
    } else if (/^\d+$/.test(userTask.task)) {
      newErrors.task = "Task cannot be only numbers.";
    }

    if (!userTask.deadline) {
      newErrors.deadline = "Deadline is required.";
    } else {
      var inputDate = new Date(userTask.deadline.split(".").reverse().join("-"));
      var today = new Date();
      today.setHours(0, 0, 0, 0);

      if (inputDate < today) {
        newErrors.deadline = "Deadline cannot be in the past.";
      } else {
        var maxDate = new Date("2049-12-31");

        if (inputDate > maxDate) {
          newErrors.deadline = "Deadline cannot be later than December 31, 2049.";
        }
      }
    }

    if (!userTask.category) {
      newErrors.category = "Category is required.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(function (error) {
      return error === "";
    });
  };

  return {
    userTask: userTask,
    handleCreateTask: handleCreateTask,
    handleChange: handleChange,
    handleChangeSelect: handleChangeSelect,
    validateForm: validateForm,
    errors: errors
  };
}