import Header from "../global/Header/Header";
import Sidebar from "../global/Sidebar/Sidebar";
import "../../App.css";

const HomePage = () => {
  return (
    <>
      {/** Header  */}
      <Header />
      <div className="app__body">
        {/** Sidebar  */}
        <Sidebar />
        {/** Feed  */}
        {/** <Feed />  */}
        {/** HeadWidgets  */}
        {/**  <Widgets /> */}
      </div>
    </>
  );
};

export default HomePage;
