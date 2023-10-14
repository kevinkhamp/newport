import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route />
          <Route />
          <Route  />
        </Routes>
      </div>
    </Router>
  )
}
