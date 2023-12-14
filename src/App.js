import Content from "./components/Content/Content";
import CreateDialog from "./components/Header/CreateDialog";
import Header from "./components/Header/Header";
import {useContext, useEffect} from "react";
import { MainContext } from "./Context/Context";

function App() {

  const { openDialog, activeContent } = useContext(MainContext)

  return (
    <div className="bg-stone-900 h-screen overflow-auto">
      <Header />
      <Content />
      {openDialog && <CreateDialog content={activeContent} />}
    </div>
  );
}

export default App;
