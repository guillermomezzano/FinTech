// Components
// import ModalDialog from '../modules/ModalDialog';
import SideBar from "./sideBar/SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
