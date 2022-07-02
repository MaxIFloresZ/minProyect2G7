
import { Header } from '../../header/Header'
import { Footer } from '../../footerSeccion/Footer'
import { FormularioPremiun } from './FormularioPremiun'


export const DatoPlanPremium = () => {
    return (
        <>
            <div className="App">
                <header className='App__header'>
                    <Header/>
                </header>
                <div className = "App__conten-contenido">
                    <FormularioPremiun />
                </div>

                <footer className='App__footer'>
                    <Footer />
                </footer>

            </div>
        </>
    )
}
