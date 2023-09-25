import Navbar from "./components/navbar/navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
    <Router>
      <Routes>

        <Route path="/" element={
          <div>

            <Navbar />

          </div>
        } />

        <Route path="sobre" element={

          <div>
            <h1>Sobre</h1>
          </div>

        }/>

      </Routes>
    </Router>
    </>
  )
}
