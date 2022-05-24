import React, {useState} from 'react'
import './SignUp.css';
import {useNavigate} from 'react-router-dom'

function SignUp ({setUser, setIsAuthenticated}) {
    const navigate = useNavigate
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name: username,
            email,
            password
        }
       
        fetch('http:localhost:3000/users',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
              setIsAuthenticated(true)
              console.log("you did it!")
              navigate("/login")
            })
            
          } else {
            res.json()
            .then(json => setErrors(json.errors))
            console.log('shoot')
          }
        })
    }
  return (
      <>
    <h1>Sign Up</h1>
    <form onSubmit={onSubmit}>
    <label>
      Username

      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    </label>
    <label>
     email

    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>
    <label>
     Password

    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>
   
    <input type="submit" value="Sign up!" />
  </form>
  { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div>{key+': ' + Object.values(errors)[index]}</div>) : null }
  </>

  )
}

export default SignUp