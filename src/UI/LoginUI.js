import {useState,  useEffect} from 'react'
import { useHistory } from 'react-router-dom';

export default function LoginUI(){
    const [userId,setUserId] = useState("");
    const[password,setPassword] = useState("");
    const history = useHistory();

    async function login(){
       console.log(userId +" "+ password)
       let item = {userId,password};
       let deets = await fetch("",{
           method:'POST',
           headers:{
               //TODO
           },
           body:JSON.stringify(item),
           });
       deets = await deets.json();
       localStorage.setItem(JSON.stringify(deets))
        if(localStorage.getItem('SSN' in patient) && password in patient){
            history.push("/patient")
        }else if(localStorage.getItem('SSN') in dentist  && password in dentist){
            history.push("/dentist")
        }else if(localStorage.getItem('SSN')in receptionist && password in receptionist){
              history.push("/receptionist")
        }
   }
    return(
        <div>
            <input type="text" placeholder="userID"  onChange={(e) => setUserId(e.target.value)}
            className="form-control"/>
            <br></br>
            <input type="text" placeholder="password"   onChange={(e) => setUserId(e.target.value)}
                className="form-control"/>
            <br></br>
            <button onClick={login}>LOGIN</button>
        </div>
    )
}
