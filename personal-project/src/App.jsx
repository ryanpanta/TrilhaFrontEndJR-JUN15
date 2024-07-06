import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Hobbies from "./Components/Hobbies";
import Introduction from "./Components/Introduction";
import Motivation from "./Components/Motivation";

function App() {
    return (
        <>
            <Header />
            
            <Introduction />
            
            <About />
            <Hobbies />
            <Motivation />
        </>
    );
}

export default App;
