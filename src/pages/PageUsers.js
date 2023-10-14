// react

// components
import Sidebar from "../../src/components/modules/ui/sideBar/SideBar";
import TableUsers from "../components/modules/TableUsers.js";

const PageUsers = () => {
  return (
    <div>
      <Sidebar />
      <h1 className="text-center">User Page</h1>
      <div className="ml-[5%] p-[2%]">
        <TableUsers />
      </div>
    </div>
  );
};

export default PageUsers;
