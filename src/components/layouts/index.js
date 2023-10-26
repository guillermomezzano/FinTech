// Components
// import ModalDialog from '../modules/ModalDialog';
import SideBar from "./sideBar/SideBar";
import Header from "./Header";
import BottonNavBar from "./BottonNavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <SideBar />
      <div>{children}</div>
      <BottonNavBar />
    </div>
  );
};

export default Layout;
