import Navbar from "../components/navbar/navbar"
import main_img from "./home.jpeg"
import "./home.css"
import { useNavigate } from "react-router-dom"




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
            <img src={main_img} className="width_img rounded-2xl" />
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
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="mb-3">
                    <h2 class="text-gray-900 text-3xl title-font font-medium">Chieira</h2>
                    <span className="text-gray-900 text-lg title-font font-medium">A chieira <span className="text-red-800">original</span></span>
                </div>
                <div>
                    <p class="leading-relaxed text-base">A chieira original com o sabor mais <span className="text-slate-900">artesanal</span> e <span className="text-slate-900">tradicional</span></p>
                    <a className=" text-red-800 no-underline cursor-pointer" onClick={() => {navigate("/sobre")}}>Saber Mais</a>
                </div>
                </div>
            </div>

            {/* Card 2 (Chieira Darq) */}
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="mb-3">
                    <h2 className="text-gray-900 text-3xl title-font font-medium">Chieira Darq</h2>
                    <span className="text-gray-500 text-lg title-font font-medium">A chieira mais <span className="text-slate-950">darq</span></span>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                    Não sei o que escrever mas não interessa porque se estás a ler isto, não te preocupes porque 
                    este texto não interessa a ninguém
                    </p>
                    <a className=" text-red-800 no-underline cursor-pointer" onClick={() => {navigate("/sobre")}}>Saber Mais</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
         


        </>
    )
}