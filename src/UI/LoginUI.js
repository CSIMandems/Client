import {useState,  useEffect} from 'react'

import { useNavigate } from 'react-router-dom';
export default function LoginUI(){
    const [userName,setUserId] = useState("");
    const[password,setPassword] = useState("");
    const nav = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            nav.navigate("/patient")
        }
    },[])
    
    async function loginPatient(){
       let item ={username:userName, password};
       let result = await fetch("http://localhost:8000/users/login",{
           method:'POST',
           headers:{
               "Content-Type":"application/json",
               "Accept":"application/json"
           },
           body: JSON.stringify(item)
       });
        alert(result);
        alert("breakpoint")
       result = await result.json();
       localStorage.setItem("user-info",JSON.stringify(result));
       nav.navigate('/patient')
   }
    return(
        <div>
            <h1>LOGIN PAGE</h1>
            <input type="text" placeholder="username"
                   onChange={(e) => setUserId(e.target.value)}
                   className="form-control"/>
            <br></br>
            <input type="text" placeholder="password"
                   onChange={(e) => setPassword(e.target.value)}
                   className="form-control"/>
            <br></br>
            <button onClick={loginPatient} >LOGIN</button>
        </div>
    )
}
