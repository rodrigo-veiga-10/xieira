import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navbar_back/navbar_back"
import cerveja from "./Beer.png"
import cereal from "./Wheat.png"
import brinde from "./Clinking Beer Mugs.png"
import estrela from "./Star.png"

export default function ch_mordoma(){
    const navigate = useNavigate
    return(
        <>
        <Navbar/>
        <div className="flex justify-center mt-4">
            <div className="text-center">
                <p class="text-zinc-800 text-7xl md:text-9xl font-normal">Mordoma</p>
                <div className="bg-gradient-to-r from-[#d9d9d9] to-[#B5A3A3]  px-2 flex justify-center rounded-xl md:w-full">
                    <span className="text-neutral-700 text-3xl font-normal">Sabor com &nbsp;</span><span className="text-red-950 text-3xl font-normal">tradição</span>
                </div>
            </div>
        </div>

        <div className="mt-12 md:flex md:justify-center md:flex-col md:items-center">
            <div className="pl-3 flex">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center">
                    <img src={cerveja} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-20 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" mb-0">Descubra uma experiência única de sabor e tradição com a Chieira Mordoma</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center">
                    <img src={cereal} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-20 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" text-sm  mb-0">A Mordoma é mais do que uma cerveja, é uma mistura equilibrada dos melhores ingredientes selecionados</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center mt-2">
                    <img src={brinde} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-24 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" text-sm  mb-0">Seja você um apreciador de cervejas ou alguém que busca uma nova experiência sensorial, a Chieira Mordoma é a escolha perfeita</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center">
                    <img src={estrela} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-20 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" text-sm  mb-0">Uma cerveja que transcende o comum e leva você a uma jornada de prazer cervejeiro incomparável</p>
                </div>
            </div>

        </div>

        </>
    )
}