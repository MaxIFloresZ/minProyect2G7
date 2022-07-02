
import './App.css';
import {Header} from './header/Header'
import {BodySeccion} from './bodySeccion/BodySeccion'
import {Footer} from './footerSeccion/Footer'

function App() {
  return (
    <div className="App">
      <header className='App__header'>
        <Header />
      </header>

      <section className='App__conten'>
        <BodySeccion />
      </section>

      <footer className='App__footer'>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
