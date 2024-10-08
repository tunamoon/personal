
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

//add back skiklls and contact if needed
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
   
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
