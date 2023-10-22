import Home from "./pages/home/home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from "react-helmet"
import Chieira_Darq from "./pages/chieira darq/ch_darq"
import Chieira_Mordoma from "./pages/chieira mordoma/ch_mordoma"



export default function App() {

  return (
    <>
    <Helmet bodyAttributes={{style: "background-color: #d9d9d9"}}/>

    <Router>
      <Routes>

        <Route path="/" element={
          <div>

            <Home />

          </div>
        } />

        <Route path="sobre" element={

          <div>
            <h1>Sobre</h1>
          </div>

        }/>

        <Route path="/ch_mordoma" element={
          <div>

            < Chieira_Mordoma />             

          </div>
        } />

        <Route path="/ch_darq" element={
          <div>

            <Chieira_Darq />

          </div>
        } />

      </Routes>
    </Router>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-YHF0D0FZFZ'"></script>
    </>
  )
}

function analytics(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YHF0D0FZFZ'');
}
addEventListener("load", analytics);
