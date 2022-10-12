import React, {useState} from 'react'
import axios from 'axios';

export default function Form() {
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
    

	return (
    <div>
        <div className="container">
        <div className="form-div">
          <span>SIGN</span>
          <form onSubmit={submit}>
            <input
              value={name}
              onChange={(e) => setFullName(e.target.value )}
              placeholder="Full Name"
            ></input>
            <input
              value={user}
              onChange={(e) => setUserName(e.target.value )}
              placeholder="User Name"
            ></input>
            <input
              value={mail}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              value={pass}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value )}
            ></input>

            <button className="btnSignUp" type="submit">
              Sign
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
