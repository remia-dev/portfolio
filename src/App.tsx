import Header from "./components/Header";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-slate-50 border-0 h-[1000px]">
        <Skill />
      </div>
    </>
  );
}

export default App;
