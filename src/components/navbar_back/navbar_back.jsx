import back from "./Back.png"
import Facebook from "./Facebook.png"
import { useNavigate } from "react-router-dom"

export default function navbar_back(){
    const navigate = useNavigate();
    return(
    <nav className="w-full h-20 flex items-center sticky top-0 bg-[#d9d9d9]">

        <img src={back} className="h-8 w-10 absolute left-2" alt="voltar atrás" onClick={() => {navigate("/")}}/>
        
        <p className="mx-auto text-center mb-0 text-3xl">Chieira</p>

        <img src={Facebook} className="h-10 w-10 absolute right-3" alt="voltar atrás" onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=100057501076191"}/>

    </nav>

    )
} 