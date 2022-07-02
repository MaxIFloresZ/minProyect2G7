import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { DatoPlanPremium } from "./bodySeccion/Datos/DatoPlanPremium";
import App from "./App"


/* -----------------RUTAS DE NAVEGACION ----------------*/
export const Navigation = () => {

  return (
    <Router>
      <div className="Navigation">
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/" element={<App />} />
          <Route path="/Datos-PlanPremium" element={<DatoPlanPremium />} />
          

        </Routes>
      </div>
    </Router>
  );
}
