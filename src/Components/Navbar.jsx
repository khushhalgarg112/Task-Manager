import { CgProfile } from "react-icons/cg";

// Navbar component definition
const Navbar = () => {
  // Render the Navbar component
  return (
    <div className="flex justify-between items-center px-10 my-6">
      <p className="text-3xl font-bold">Task Board</p>
      <CgProfile className="text-5xl" />
    </div>
  );
};

// Export the Navbar component
export default Navbar;
