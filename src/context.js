import React,{ useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    const openModel = ()=>{
        setIsModalOpen(true)
    }
    const closeModel= ()=>{
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{isModalOpen,isSidebarOpen,openModel,closeModel,closeSidebar,openSidebar}}>{children}</AppContext.Provider>
}
//Coustom hooks
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}