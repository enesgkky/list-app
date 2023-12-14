import { createContext, useState } from "react";
import NewListContent from "../components/DialogContents/NewListContent";

const MainContext = createContext();

const Provider = ({ children }) => {

    const [openDialog, setOpenDialog] = useState(false)
    const [activeContent, setActiveContent] = useState(<NewListContent />)
    const [lists, setLists] = useState([])
    const data = {
        openDialog, setOpenDialog,
        activeContent, setActiveContent,
        lists, setLists,
    }
    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>)
}
export { MainContext, Provider }