import "./app.css";
import AboutSection from "./components/AboutSection";
import CameraSection from "./components/CameraSection";
import Footer from "./components/Footer";
import HeadSection from "./components/HeadSection";

function App() {
  return (
    <div className="App">
      <HeadSection />
      <AboutSection />
      <CameraSection />
      <Footer />
    </div>
  );
}

export default App;
