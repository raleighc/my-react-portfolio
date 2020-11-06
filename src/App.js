import Landing from "./pages/Landing";
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
    
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/my-react-portfolio" component={Landing} />
          
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
