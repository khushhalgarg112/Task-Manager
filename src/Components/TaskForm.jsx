import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useRecoilState, useSetRecoilState } from "recoil";
import { myIdState } from "../store/id";
import { myListState } from "../store/tasks";

const TaskForm = ({ onClose }) => {
  // Recoil state for managing unique task IDs
  const [idState, setIdState] = useRecoilState(myIdState);

  // Form data state
  const [formData, setFormData] = useState({
    id: idState,
    title: "",
    description: "",
    assignee: "",
    priority: "",
    status: "",
    deadline: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Recoil setter function for updating task list
  const setMyList = useSetRecoilState(myListState);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new task to task list
    setMyList((prevList) => [...prevList, formData]);
    // Increment task ID for uniqueness
    setIdState(idState + 1);
    console.log("Form submitted:", formData);
    // Close the form
    onClose();
  };

  return (
    <div className="bg-gradient-to-r from-grad1 to-grad2 sm:w-3/4 md:w-1/2 lg:w-1/4 xl:w-1/4">
      <div className="flex justify-between bg-white px-4 py-1 items-center">
        <p className="font-medium">CREATE A TASK</p>
        <button onClick={onClose}>
          <RxCrossCircled className="" />
        </button>
      </div>
      <div className="px-4 py-4">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>Title:</div>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            />
            <div>Description:</div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            />
            <div>Assignee:</div>
            <input
              type="text"
              name="assignee"
              value={formData.assignee}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            />
            <div>Priority:</div>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            >
              <option value="">Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <div>Status:</div>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            >
              <option value="">Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
            <div>Deadline:</div>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="rounded-md border bg-inputbg border-gray-300 px-2 py-1 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
