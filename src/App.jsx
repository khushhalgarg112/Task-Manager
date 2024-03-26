import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import TaskForm from "./Components/TaskForm";
import TaskCard from "./Components/TaskCard";
function App() {
  return (
    <div className=" bg-gradient-to-r from-grad1 to-grad2 h-full lg:h-screen w-screen px-14 py-4">
      <Navbar />
      <Dashboard />
      {/* <TaskCard
        title="Task 1"
        priority="P0"
        description="HI this is the description of the Task"
        assignee="Assigne"
        status="Completed"
      /> */}
    </div>
  );
}

export default App;
