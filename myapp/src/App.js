
import "./App.css";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Footer from "./Footer";

// import Like1 from "./Like1"
import Form from "./Form"
import Formdata from "./Formdata"
import Dashboard from "./Dashboard"
import Courses from "./Courses";
import Class from "./Class";


function App() {
  
  return (
    <div className="App">
    
      <Router>
       {/* <Novbar/>  */}
      
        <Routes>
        {/* <Route path="/" element={<Like1 />} /> */}
       
        
        <Route path="/" element={<Form />} />
        <Route path="/Formdata" element={<Formdata />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Class" element={<Class/>} />
             
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
