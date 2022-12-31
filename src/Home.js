import React,{useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import { AppContext,useGlobalContext } from './context';
function Home() {
    const {openModel,openSidebar} = useGlobalContext()
    // console.log(data)
  return (
    <main>
        <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars/>
            
        </button>
        <button className="btn" onClick={openModel}>Show Modal</button>
    </main>
  )
}

export default Home