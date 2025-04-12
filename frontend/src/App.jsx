import {BrowserRouter, Routes,Route} from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <route exact path="/" element={<Create/>}/>
        <route path="/read" element={<Read/>}/>
        <route path="/:id" element={<Update/>}/>
        <route />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
