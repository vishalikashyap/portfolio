import Navbar from "./components/navbar/navbar";
import Info from "./components/info/info";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Clients from "./components/clients/clients";
import Contect from "./components/contect/contect";
import Projects from "./components/project/projects";
import Footer from "./components/footer/footer";
import CursorEffect from "./components/cursoreffect/cursoreffect";
import About from "./components/about/about";
import Resume from "./components/resume/resume";

function App() {
  return (
    <div className="App">
    <CursorEffect />
    <Navbar/>
    <Info/>
    <About/>
    <Skills/>
    <Projects/>
    <Resume/>
    <Contect/>
    <Footer/>
    </div>
  );
}

export default App;
