import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { myListState } from "../store/tasks";
import StatusCard from "./StatusCard";
import TaskForm from "./TaskForm";

const Dashboard = () => {
  // State variables for managing task form visibility and filter/sort options
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] = useState("");
  const [enddate, setEndDate] = useState("");
  const [startdate, setStartDate] = useState("");
  const [sort, setSort] = useState("");
  const toggleTaskForm = () => {
    setShowTaskForm(!showTaskForm);
  };

  // Fetching task list from Recoil state
  let tasklist = useRecoilValue(myListState);

  // Filtering tasks based on filter options
  if (assignee !== "") {
    tasklist = tasklist.filter((event) => event.assignee === assignee);
  }
  if (priority !== "") {
    tasklist = tasklist.filter((event) => event.priority === priority);
  }
  if (enddate != "" && startdate != "") {
    const startDateObj = new Date(startdate);
    const endDateObj = new Date(enddate);
    if(startDateObj > endDateObj){
      alert("Data Range is Invalid")
    }
    tasklist = tasklist.filter((task) => {
      const taskDate = new Date(task.deadline);
      return taskDate >= startDateObj && taskDate <= endDateObj;
    });
  }
  if (sort !== "") {
    let sortlist = tasklist.filter((event) => event.priority === sort);
    tasklist = tasklist.filter((event) => event.priority !== sort);
    sortlist = sortlist.concat(tasklist);
    tasklist = sortlist;
  }

  return (
    <div className="border-2 rounded-lg border-white py-3 relative">
      {/* Filter and Add New Task button */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="px-4 font-medium lg:m-0 my-1">Filter By:</p>
          <input
            className="rounded-md mx-4 p-1 text-center lg:mx-2 my-1"
            type="text"
            onChange={(e) => {
              setAssignee(e.target.value);
            }}
            placeholder="Assignee Name"
          />
          <select
            className="mx-4 p-1 rounded-md lg:mx-2 my-1"
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="">Priority</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
          <div className="bg-white mx-4 p-1 border-1 rounded-md lg:mx-2 my-1">
            <input
              type="date"
              className="first pl-2"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            -
            <input
              type="date"
              className="ml-4 lg:mx-2 my-1"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="mx-6 px-10 py-1 rounded-md text-white lg:mx-7 my-1 bg-btnclr"
          onClick={toggleTaskForm}
        >
          Add New Task
        </button>
      </div>

      {/* Sort By */}
      <div className="flex flex-col lg:flex-row mt-5 lg:items-center">
        <p className="px-4 font-medium">Sort By:</p>
        <select
          className="mx-5 p-1 rounded-md"
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="">Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>

      {/* Status Cards for displaying tasks */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between px-4">
        <StatusCard statusText="Pending" bgColor="stat1" task={tasklist} />
        <StatusCard statusText="In Progress" bgColor="stat2" task={tasklist} />
        <StatusCard statusText="Completed" bgColor="stat3" task={tasklist} />
        <StatusCard statusText="Deployed" bgColor="stat4" task={tasklist} />
        <StatusCard statusText="Deffered" bgColor="stat5" task={tasklist} />
      </div>

      {/* Task Form */}
      {showTaskForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <TaskForm onClose={toggleTaskForm} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
