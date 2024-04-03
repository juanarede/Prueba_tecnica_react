import { Outlet } from "react-router-dom"
import Navbar from "../components/layoutComponents/Navbar"
import Footer from "../components/layoutComponents/Footer"
import Float from "../components/layoutComponents/Float"

export default function GuestLayouts() {
  return (
    <>
    <Navbar/>
    <Float/>
    <Outlet/>
    <Footer/>

    </>
  )
}
