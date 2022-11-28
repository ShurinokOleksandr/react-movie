import './assets/Styled/App.scss';
import Header from "./Layouts/Header";
import Slider from "./Components/Swiper";
import SectionWithFilm from "./Components/sectionWithFilm";
import SectionGetPremium from "./Components/SectionGetPremium";
import Footer from "./Layouts/Footer";



function App() {

    return (
        <div className="App">
            <Header/>
            <Slider/>
            <SectionGetPremium/>
            <SectionWithFilm/>
            <SectionWithFilm/>
            <Footer/>
        </div>
    );
}

export default App;
