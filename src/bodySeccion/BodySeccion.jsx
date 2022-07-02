import { useState } from "react"
import { Mensaje } from "./Mensaje";
import { PlanPremiun } from "./PlanPremiun";
import { PlanStandar } from "./PlanStandar"

export const BodySeccion = () => {

  const [selcPlan, setSelcPlan] = useState('')

  console.log(selcPlan);

  return (
    <>
      <div className="App__conten-opciones">
        <input type="radio" value={selcPlan} name="selecPlan" onClick={() => setSelcPlan('planStandar')} /> <b>Plan. Estandar</b>
        <input type="radio" value={selcPlan} name="selecPlan" onClick={() => setSelcPlan('planPremiun')} /> <b>Plan. Premiun</b>
      </div>

      <div className="App__conten-contenido">
      {
          (selcPlan==='') && <Mensaje />
        }
        {
          (selcPlan === 'planStandar') && <PlanStandar /> 
        }
        {
          (selcPlan === 'planPremiun') && <PlanPremiun />
        }

       
      </div>
      


    </>
  )
}
