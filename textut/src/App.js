
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
//import About from './components/About';
function App() {
 
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  

  const showAlert = (message, type)=>{
    setAlert({
    msg: message,
    type: type
    })
    setTimeout (() =>{
      setAlert(null)
    }, 1500)

  }
  const removebodyclasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }

  const togglemode = (cls)=>{
    removebodyclasses()
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setmode ('dark');
      document.body.style.backgroundColor = '#033254';
      showAlert("Darkmode is enabled", "success")
    }
    //else if (mode === 'light'){
      //setmode ('dark');
      //document.body.style.backgroundColor = 'red';
      //showAlert("Darkmode is enabled", "success")
    //}

    //else if (mode === 'light'){
     // setmode ('dark');
      //document.body.style.backgroundColor = 'green';
     // showAlert("Darkmode is enabled", "success")
    //}
    else{
      setmode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Lightmode is enabled", "success")
    }
  }


  return (
    <>
   
<Navbar title = "Textutils" mode={mode} togglemode={togglemode}/>
{/*<Navbar/>8*/}
<Alert alert = {alert}/>
<div className="container my-3">
<Textform showAlert={showAlert} heading = "Enter the text you want to analyse" mode={mode}/>
{/*} <About/>*/}
</div>


    </>
  );
}

export default App;
