import { useNavigate } from "react-router-dom"
import Navbar from "../../components/navbar_back/navbar_back"

import cereal from "./Barley.png"
import graos from "./Coffee Beans.png"
import brinde from "./Clinking Beer Mugs.png"
import estrela from "./Star.png"

export default function ch_mordoma(){
    const navigate = useNavigate
    return(
        <>
        <Navbar/>
        <div className="flex justify-center mt-4">
            <div className="text-center">
                <p class="text-zinc-800 text-7xl md:text-9xl font-normal font-['Inter']">Darq</p>
                <div className="bg-gradient-to-r from-[#d9d9d9] to-[#a3a3a3] w-fit px-2 flex justify-center rounded-xl">
                    <span className="text-neutral-700 text-3xl font-normal font-['Inter']">A chieira mais &nbsp;</span><span className="text-slate-950 text-3xl font-normal font-['Inter']">darq</span>
                </div>
            </div>
        </div>

        <div className="mt-12">
            <div className="pl-3 flex">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center">
                    <img src={cereal} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-16 w-64 ml-6 rounded-xl flex justify-center items-center p-2 mt-2">
                    <p className="font-['Inter'] mb-0">Cerveja escura e encorpada, com tons de malte torrado</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center">
                    <img src={graos} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-20 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" text-sm font-['Inter'] mb-0">A cada gole o amargo e a doçura juntam-se para proporcionar o melhor sabor</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center mt-2">
                    <img src={brinde} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-16 w-64 ml-6 rounded-xl flex justify-center items-center p-2 mt-3">
                    <p className=" text-sm font-['Inter'] mb-0">Brinde à riqueza, ao caráter e à paixão cervejeira com uma Stout extraordinária.</p>
                </div>
            </div>

            <div className="pl-3 flex mt-4">
                <div className="bg-[#ededed] h-20 w-20 rounded-full flex items-center justify-center mt-2">
                    <img src={estrela} alt="" className="h-[65px] w-[65px]" />
                </div>
                <div className="bg-[#ededed] h-24 w-64 ml-6 rounded-xl flex justify-center items-center p-2">
                    <p className=" text-sm font-['Inter'] mb-0">Deixe-se envolver pela escuridão deliciosa da Chieira Darq e descubra um universo de sabor e tradição em cada garrafa</p>
                </div>
            </div>

        </div>

        </>
    )
}