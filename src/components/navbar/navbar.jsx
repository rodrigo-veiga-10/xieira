import logo from "./logo.jpeg"
import dropdown from "./dropdown.png"
import "./navbar.css"
import { useNavigate } from "react-router-dom"


export default function Navbar() {

    const navigate = useNavigate()

  return (
    <>
      <nav className="bg-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-24 mx-auto md:px-4 justify-between flex items-center md:flex-nowrap">

            <div className="text-indigo-500 md:order-1 md:mx-0">
                <img src={logo} className="h-14 w-14 rounded-full" alt="" />
            </div>

            <div className="text-gray-600 md:w-auto md:order-2 ml-8">
                <p><span className="text-amber-800 text-xl">Chieira</span> <br /> A Cerbeija Bianense</p>
            </div>

           <div class="dropdown">
               <img class="h-6 w-6 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" src={dropdown}></img>
               <ul className="dropdown-menu gray"> 
                   <p  className="dropdown-item" onClick={() => {navigate("/sobre")}}>Sobre</p>
               </ul>
           </div>

        </div>
        </nav>

        </>
  )
}
