import About from '../about/About';
import Contacts from '../contacts/Contacts';
import Header from '../header/Header';
import Projects from '../projects/Projects';
import Promo from '../promo/Promo';

import './App.scss'

function App() {

  return (
    <>
      <Header/>
      <Promo/>
      <About/>
      <Projects/>
      <Contacts/>
    </>

  )
}

export default App;
