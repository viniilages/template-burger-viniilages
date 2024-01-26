import { ToastContainer } from "react-toastify"
import "./globalStyle/style.module.scss"
import { HomePage } from "./pages/HomePage"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer />
    </>
  )
}

export default App
