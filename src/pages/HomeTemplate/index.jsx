import { Outlet } from 'react-router-dom';
import { Footer } from "./Footer";
import { Header } from "./Header";
export const HomeTemplate = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

