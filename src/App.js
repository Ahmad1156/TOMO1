import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Layout/Navbar/Navbar";
// import Stories from "./SecondPage/Stories";
import JoinUs1 from "./SixthPage/Join1/JoinUs";
import JoinUs2 from "./SixthPage/Join2/JoinUs2";
import JoinUs3 from "./SixthPage/Join3/JoinUs3";
import Education from "./Education/Education";
import Methodology from "./methodology/Methodology";
import Landing from "./Landing/Landing";
import StoryContent from "./StoryContent/StoryContent";
import Stories from "./SecondPage/Stories";
import Imaginary from "./Imaginary/Imaginary";
import Future from "./Future/Future";
import Footer from "./Layout/Footer/Footer";
import About from "./about/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<Education />} />
        <Route path="/stories/:id/content/:id" element={<StoryContent />} />
        <Route path="/joinUs" element={<JoinUs1 />} />
        <Route path="/asFacilitator" element={<JoinUs2 />} />
        <Route path="/asParticipant" element={<JoinUs3 />} />
        <Route path="/imaginary" element={<Imaginary />} />
        <Route path="/imaginary/artifact/:id" element={<Future />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
