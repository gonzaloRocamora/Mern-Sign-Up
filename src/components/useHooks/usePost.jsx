import React, {useState} from 'react'
import axios from 'axios'

export default function usePost() {
    const [name, setFullName] = useState();
    const [user, setUserName] = useState();
    const [mail, setEmail] = useState();
    const [pass, setPassword] = useState();
    
  
    const submit = (event, args) =>{
        event.preventDefault();
        const registered = {
            fullName: name,
            userName: user,
            email: mail,
            password: pass
        }
         
        axios.post("http://localhost:4000/app/signup", registered)
            .then(response => console.log("Hay response ?",response.data))
    }
    return{
        name,
        setFullName,
        user,
        setUserName,
        mail,
        setEmail,
        pass,
        setPassword,
        submit
    }
}

    