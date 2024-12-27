import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useActionState, useState}  from 'react'



function App() {
   const [mode, setmode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert =(massage,type)=>{
    setAlert({
     msg:massage,
    type:type
    }) 
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   }
   

  const togglemode = ()=>{
    if(mode==='dark')
    {
      setmode('light');
      document.body.style.backgroundColor="white";
     showAlert("Dark mode is off","success")
    }
    else
      {
        setmode('dark');
        document.body.style.backgroundColor="#F0F8FF";
        showAlert("Dark mode is on","success")
      }

  }
  return (
    <>
      <Navbar title="TextUtilz" Home="Home" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/> 
      {/* <About/> */}
      <TextForm showAlert={showAlert}/>
      
    </>
  );
}

export default App;  
