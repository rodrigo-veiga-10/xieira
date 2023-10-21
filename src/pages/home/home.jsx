import Navbar from "../../components/navbar/navbar"
import main_img from "./home.jpeg"
import "./home.css"
import { useNavigate } from "react-router-dom"
import {MobileView, BrowserView} from "react-device-detect"
import info from "./info.png"
import email from "./email.png"




export default function Home() {

    const navigate = useNavigate();

    return (
        <>
        {/* Navbar do topo */}
        <Navbar />

        {/* Titulo e subtitulo principal */}
        <div className="text-center mt-3">
            <h1 className="text-6xl font-light text-slate-900">Chieira</h1>
            <span className="text-xl font-light  p-1 text-slate-800">A Cerbeija Bianense</span>
        </div>

        {/* Imagem principal (duas cervejas e um copo) */}
        <div className="flex justify-center mt-16">
            <img src={main_img} className="width_img rounded-2xl"  alt="imagem com duas cervejas e um copo"/>
        </div>

        {/* 
            - Quebra de linha para dar o espaçamento ideal
            Futura Tarefa: Reduzir número de <br/>
         */}
        <br />
        <br />
        <br />

        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">

            {/* Titulo */}
            <div class="flex flex-col text-center w-full mb-8">
            <h2 class="text-sm text-slate-500 tracking-widest font-medium title-font mb-1">A melhor Cerbeija Bianense</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Chieira</h1>
            </div>


            {/* Cards */}
            <div class="flex flex-wrap -m-4">

            {/* Card 1 (Chieira Original) */}
            <div class="p-4 md:w-1/3" onClick={() => {navigate("/ch_mordoma")}}>
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="mb-3">
                    <h2 class="text-gray-900 text-3xl title-font font-medium">Mordoma</h2>
                    <span className="text-gray-900 text-lg title-font font-medium">A chieira <span className="text-red-800">original</span></span>
                </div>
                <div>
                    <p class="leading-relaxed text-base">Cerveja com sabor e tradição, trabalhada e refinada ao longo dos anos.
                     A combinação do conhecimento cervejeiro e os ingredientes de alta qualidade leva Mordoma a um novo patamar de sabor
                    </p>
                    <a className=" text-slate-700 font-medium no-underline cursor-pointer" onClick={() => {navigate("/ch_mordoma")}}>Saber mais...</a>
                </div>
                </div>
            </div>

            {/* Card 2 (Chieira Darq) */}
            <div class="p-4 md:w-1/3" onClick={() => {navigate("/ch_darq")}}>
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="mb-3">
                    <h2 className="text-gray-900 text-3xl title-font font-medium">Chieira Darq</h2>
                    <span className="text-gray-500 text-lg title-font font-medium">A chieira mais <span className="text-slate-950">darq</span></span>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                    Cerveja escura e encorpada, com tons de malte torrado.
                     A cada gole o amargo e a doçura juntam-se para proporcionar o melhor sabor. 
                     Brinde à riqueza, ao caráter e à paixão cervejeira com uma Stout extraordinária.
                    </p>
                    <a className=" text-slate-700 font-medium no-underline cursor-pointer" onClick={() => {navigate("/ch_darq")}}>Saber mais...</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
         
        <BrowserView>
            <div className="flex  h-12 text-3xl m-auto items-center mt-3 justify-center">
                <div className="h-10 w-10">
                    <img src={info} alt="ícone de informação" />
                </div>
                <span className="ml-3 mr-1 text- font-bold">Chieira</span><span className="text- mr-1">só está disponível em Viana do Castelo!</span>
                <a className="text- font-bold underline text-black" href="https://www.google.com/maps/dir/?api=1&destination=41.6978,-8.8355">Direções</a>
            </div>
            </BrowserView>
            <MobileView>
            <div className="flex  h-12 m-auto items-center justify-center  mb-3 text-lg">
                <div className="h-5 w-5">
                    <img src={info} alt="ícone de informação" />
                </div>
                <span className="ml-2 mr-1 text- font-bold">Chieira</span><span className="text- mr-1">só em Viana do Castelo!</span>
                <a className="text- font-bold underline text-black" href="https://www.google.com/maps/dir/?api=1&destination=41.6978,-8.8355">Direções</a>
            </div>
            </MobileView>

        <div className="mt-6 flex flex-col items-center bg-gray-100 rounded-2xl w-[360px] mx-auto mb-5">
            <p className="text-5xl text-center mt-3">Contacta-nos</p>
            <div className="mb-8 flex justify-center items-center">
                <div className="text-primary mr-6 flex h-[80px] w-[70px] sm:h-[70px] sm:w-[70px] items-center justify-center overflow-hidden rounded bg-opacity-5">
                    <img src={email} alt="email" />
                </div>
                <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark">
                        Email
                    </h4>
                    <a className="text-base text-body-color no-underline text-[#414040]" href = "mailto: ptveiga@gmail.com">
                        ptveiga@gmail.com
                    </a>
                </div>
            </div>
        </div>

        </>
    )
}