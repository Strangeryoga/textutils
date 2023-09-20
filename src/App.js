import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';



import {
  BrowserRouter as Router,
  Link,
  Route,
  NavLink,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode]=useState('light')//whether light mode is enable or not
  const [alert, setAlert]=useState(null);

  const [color, setcolor] = useState("")
  function cgr(e){
    setcolor(e.target.style.backgroundColor)
  }

 
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils- Dark Mode"

    }else if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='#E9E9E4';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils- Light Mode"
    }

  }

 

  return (
    <>
    
     <Router> 
    <Navbar title="TextUtils" home="Home"  mode={mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>
    <div className='' style={{backgroundColor:color}} >
    <button onClick={cgr} style={{backgroundColor: "red"}}></button>
    <button onClick={cgr} style={{backgroundColor: "green"}}></button>
    <button onClick={cgr} style={{backgroundColor: "yellow"}}></button>
    <button onClick={cgr} style={{backgroundColor: "olive"}}></button>
    <button onClick={cgr} style={{backgroundColor: "blue"}}></button>

    {/* <Routes>

          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/"  element={}>
          </Route>
    </Routes> */}
    {/* <TextForm showAlert={showAlert}heading="Enter the text to Analyze" mode={mode} /> */}
{      
     <Routes>
      <Route path='' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} color={color} />}/>
      <Route path='/textutils' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} color={color} />}/>
      <Route path='/home' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} color={color} />}/>
      <Route path='/logo' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} color={color} />}/>

     </Routes> }
    {/* <About/> */}
    {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode} /> */}
   

    </div>
     </Router> 
    </>
  );
}

export default App;
