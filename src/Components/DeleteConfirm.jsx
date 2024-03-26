import React from "react";

// Importing React Icons
import { RxCrossCircled } from "react-icons/rx";

// DeleteConfirm component definition
const DeleteConfirm = ({ taskTitle, onCancel, onConfirm }) => {
  // Rendering the DeleteConfirm component
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      {/* Delete confirmation dialog */}
      <div className="bg-white bg-gradient-to-r from-grad1 to-grad2 p-4 rounded-lg shadow-lg">
        {/* Header section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">DELETE TASK</h3>
          {/* Cancel button */}
          <button onClick={onCancel}>
            <RxCrossCircled className="" />
          </button>
        </div>
        {/* Confirmation message */}
        <p className="mb-4">Do You Wish to Delete Task ?</p>
        {/* Buttons section */}
        <div className="flex justify-between">
          {/* Task title */}
          <div>
            <p>{taskTitle}</p>
          </div>
          {/* Confirmation buttons */}
          <div>
            {/* Confirm deletion button */}
            <button
              className="bg-btnclr text-white px-4  rounded mr-2"
              onClick={onConfirm}
            >
              Yes
            </button>
            {/* Cancel deletion button */}
            <button
              className="bg-btnclr text-white px-4 rounded"
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the DeleteConfirm component
export default DeleteConfirm;
