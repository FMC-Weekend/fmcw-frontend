import React,{useState} from 'react'
import "./ComingSoon.css"

const ComingSoon = () => {

  const [email,setEmail] = useState("");

  const userData = (e) =>{
     setEmail(e.target.value);
  }

  const submitData = async (e) => {
    e.preventDefault();
    if (email) {
    const res= fetch("https://fmc-comingsoon-default-rtdb.firebaseio.com/userDataRecords.json",
    {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
      })
    }

    
    )
    if(res) {
      setEmail("");
      alert("Email saved, you will be notified.")
  
    }
  
    else{
      alert("Enter your email to get notified.")
    }
  }
  else{
    alert("Enter your email to get notified.")
  }
  
  }

  



  return (
    <div className="container">
    <div className="c1">
    <img src="./fmclogo.png" className="fmc"></img>
    <img className="illus" src="./illus1.png" alt="Description of the image" />

    </div>
    <div className="c2">
    <h1 className="title">Coders At Work</h1>
    <p className="cs">-Coming Soon-</p>
    
    <p className="msg">Get Notified when we launch</p>
    <div class="btnip">
    <>
     <input 
     className="ip" 
     type="text" 
     placeholder="Enter your email address"
     
     value={email}
     onChange={userData}
      >

      </input>
     <button 
     className="btn"
     onClick={submitData}
     >Notify me</button>
     
     
     </>
    </div>
    </div>
    </div>
  )
}

export default ComingSoon