import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { myListState } from "../store/tasks";
import DeleteConfirm from "./DeleteConfirm";
import EditTaskForm from "./EditTaskForm";

const TaskCard = ({
  id,
  title,
  priority,
  description,
  assignee,
  status,
  deadline,
}) => {
  // State for dropdown visibility
  const [dropdownVisible, setDropdownVisible] = useState(false);
  // State for showing edit task form
  const [showTaskForm, setShowTaskForm] = useState(false);
  // State for showing delete confirmation modal
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to toggle edit task form visibility
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
    // Hide dropdown when edit form is opened
    setDropdownVisible(false);
  };

  // Function to handle delete task action
  const handleDelete = () => {
    setShowConfirmation(true);
    // Hide dropdown when delete confirmation is shown
    setDropdownVisible(false);
  };

  // Function to confirm delete task action
  const confirmDelete = () => {
    const updatedList = taskList.filter((event) => event.title !== title);
    setTaskList(updatedList);
    setShowConfirmation(false);
    console.log("Deleting task...");
  };

  // Function to cancel delete task action
  const cancelDelete = () => {
    setShowConfirmation(false);
  };

  // Recoil state for task list
  const [taskList, setTaskList] = useRecoilState(myListState);

  return (
    <div className="bg-gray-200 p-2 mx-1 mb-2 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold mr-2">{title}</h2>
        <div className="bg-btnclr text-white px-2 rounded">{priority}</div>
      </div>
      <hr className="border-gray-400 mb-2" />
      <p className="text-gray-700 mb-2">{description}</p>
      <div className="flex justify-between items-center mb-2">
        <span className="mr-2">@{assignee}</span>
        <div className="relative">
          <span className="text-xl cursor-pointer" onClick={toggleDropdown}>
            &#8226;&#8226;&#8226;
          </span>
          {/* Dropdown menu for edit and delete actions */}
          {dropdownVisible && !showTaskForm && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md">
              <ul className="divide-y divide-gray-300">
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  onClick={toggleTaskForm}
                >
                  Edit
                </li>
                <li
                  className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                  onClick={handleDelete}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Status tag */}
      <div className="bg-btnclr text-white px-2 rounded">{status}</div>
      {/* Delete confirmation modal */}
      {showConfirmation && (
        <DeleteConfirm
          taskTitle={title}
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      {/* Edit task form */}
      {showTaskForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <EditTaskForm
            onClose={() => setShowTaskForm(false)}
            title={title}
            description={description}
            status={status}
            id={id}
            priority={priority}
            deadline={deadline}
            assignee={assignee}
          />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
