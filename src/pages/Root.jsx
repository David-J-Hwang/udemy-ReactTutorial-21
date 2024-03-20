import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

// import classes from './Root.module.css'

export default function RootLayout() {
  return (
    <>
      {/* <h1>Layout</h1> */}
      {/* Outlet: child routes should be rendered here */}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  ) 
}