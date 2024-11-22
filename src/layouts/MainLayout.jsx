/* HANDLES THE LAYOUT OF THE APP, 
can be used as a template for other pages IN combination  */ 

import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>  
        <Navbar />
        <Outlet />
        <ToastContainer/>
    </>
  )
}
export default MainLayout