import Projects from "./pages/Projects";
import About from "./pages/About";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header />
          
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
