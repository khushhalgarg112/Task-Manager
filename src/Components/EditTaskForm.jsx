import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { myListState } from "../store/tasks";

// EditTaskForm component definition
const EditTaskForm = ({
  onClose,
  id,
  title,
  priority,
  description,
  assignee,
  status,
  deadline,
}) => {
  // State for form data
  const [formData, setFormData] = useState({
    id: id,
    title: title,
    description: description,
    assignee: assignee,
    priority: priority,
    status: status,
    deadline: deadline,
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Recoil state for task list
  const [myList, setMyList] = useRecoilState(myListState);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update task list with new data
    const updatedList = myList.map((task) => {
      if (task.id === formData.id) {
        // Create a new task object with updated priority and status
        return {
          ...task,
          priority: formData.priority,
          status: formData.status,
        };
      }
      return task; // For other tasks, return them unchanged
    });

    // Set updated task list
    setMyList(updatedList);

    // Close the form
    onClose();
  };

  // Render the EditTaskForm component
  return (
    <div className="bg-gradient-to-r from-grad1 to-grad2  sm:w-3/4 md:w-1/2 lg:w-1/4 xl:w-1/4 ">
      <div className="flex justify-between bg-white px-4 py-1 items-center">
        <p className="font-medium">EDIT TASK</p>
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
              readOnly
              value={formData.title}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            />
            <div>Description:</div>
            <textarea
              readOnly
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="rounded-md bg-inputbg border border-gray-300 px-2 py-1 w-full"
            />
            <div>Assignee:</div>
            <input
              type="text"
              readOnly
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
              readOnly
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="rounded-md border bg-inputbg border-gray-300 px-2 py-1 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the EditTaskForm component
export default EditTaskForm;
