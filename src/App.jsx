import { Toaster } from 'sonner'
import Navbar from './myCompo/Navbar'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <>
      <Toaster />
      <Navbar></Navbar>
      <Outlet />

    </>
  )
}

export default App
