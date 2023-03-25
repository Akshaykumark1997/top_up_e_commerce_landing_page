import "./App.css";
// import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NewArraival from "./components/new_arraivals_section/NewArraival";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <div className="bg-[#EEE]">
        <Home />
        <div className="relative">
          <Hero />
          <div className="max-w-[1600px] lg:w-[85%] mx-auto lg:-mt-16">
            <NewArraival />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
