import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hobbies from "./Components/Hobbies";
import Introduction from "./Components/Introduction";
import Motivation from "./Components/Motivation";
import Techs from "./Components/Techs";

function App() {
    return (
        <>
            <Header />
            <Introduction />
            <About />
            <Hobbies />
            <Motivation />
            <Techs />
            <Footer />
        </>
    );
}

export default App;
