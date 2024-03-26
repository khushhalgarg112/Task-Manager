import React from "react";
import TaskCard from "./TaskCard";

// StatusCard component definition
const StatusCard = ({ statusText, bgColor, task }) => {
  // Filter tasks based on status
  const list = task.filter((event) => event.status === statusText);

  // Render the StatusCard component
  return (
    <div className="w-full mx-2 my-4 h-96 bg-white rounded-lg shadow">
      <div
        className={`flex items-center justify-center w-full p-2 ${bgColor} rounded-t-lg mb-1`}
      >
        <p className="text-white font-semibold">{statusText}</p>
      </div>
      <div className="flex-1 w-full h-85 overflow-auto">
        {/* Map through the list of tasks */}
        {list.map((task, index) => (
          <TaskCard
            key={index}
            id={task.id}
            title={task.title}
            priority={task.priority}
            description={task.description}
            assignee={task.assignee}
            status={task.status}
            deadline={task.deadline}
          />
        ))}
      </div>
    </div>
  );
};

// Export the StatusCard component
export default StatusCard;
