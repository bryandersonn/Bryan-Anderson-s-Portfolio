import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden">
        <NavBar></NavBar>
        <Home></Home>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Experience></Experience>
        <Contact></Contact>

        <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
