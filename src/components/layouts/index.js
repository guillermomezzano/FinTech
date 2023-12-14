// Components
import SideBar from "./sideBar/SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-14">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
