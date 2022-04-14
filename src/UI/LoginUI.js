import {useState, useHistory, useEffect} from 'react'

export default function LoginUI(){
    const [userId,setUserId] = useState("");
    const[password,setPassword] = useState("");
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('userId')){
            history.push("/patient")
        }
    })

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
        history.push("/patient")
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
