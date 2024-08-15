"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTasks = useTasks;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useTasks() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      sortOrder = _useState6[0],
      setSortOrder = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      filter = _useState8[0],
      setFilter = _useState8[1];

  (0, _react.useEffect)(function () {
    var userTasks = localStorage.getItem("userTasks");
    var tasksArray = [];

    if (userTasks) {
      tasksArray = JSON.parse(userTasks);
    }

    setTasks(tasksArray);
  }, []);

  var handleDeleteTask = function handleDeleteTask(index, event) {
    event.stopPropagation();
    var updatedTasks = tasks.filter(function (_, taskIndex) {
      return taskIndex !== index;
    });
    setTasks(updatedTasks);
    localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  };

  var handleClickTask = function handleClickTask(index) {
    var clickedTask = tasks[index];

    var updatedTask = _objectSpread({}, clickedTask, {
      isCompleted: !clickedTask.isCompleted
    });

    var updatedTasks = tasks.map(function (task, taskIndex) {
      return taskIndex === index ? updatedTask : task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("userTasks", JSON.stringify(updatedTasks));
  };

  var updateTasks = function updateTasks() {
    var userTasks = localStorage.getItem("userTasks");
    var tasksArray = [];

    if (userTasks) {
      tasksArray = JSON.parse(userTasks);
    }

    setTasks(tasksArray);
  };

  var filteredTasks = tasks.filter(function (task) {
    return task.task.toLowerCase().includes(search.toLowerCase());
  });
  return {
    tasks: tasks,
    search: search,
    filteredTasks: filteredTasks,
    setSearch: setSearch,
    handleDeleteTask: handleDeleteTask,
    handleClickTask: handleClickTask,
    updateTasks: updateTasks,
    sortOrder: sortOrder,
    setSortOrder: setSortOrder,
    filter: filter,
    setFilter: setFilter
  };
}