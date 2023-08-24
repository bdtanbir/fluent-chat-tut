import React, {useState} from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

    const {handleUserRegister} = useAuth()

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })

    const handleInputChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        
        setCredentials({...credentials, [name]: value})
    }

  return (
    <div className="auth--container">
        <div className="form--wrapper">
            <form onSubmit={(e) => {handleUserRegister(e, credentials)}}>
                <div className="field--wrapper">
                    <label>Name:</label>
                    <input 
                        type="text"
                        required
                        name="name"
                        placeholder="Enter Your name"
                        value={credentials.name}
                        onChange={handleInputChange}
                     />
                </div>
                <div className="field--wrapper">
                    <label>Email:</label>
                    <input 
                        type="email"
                        required
                        name="email"
                        placeholder="Enter Your email"
                        value={credentials.email}
                        onChange={handleInputChange}
                     />
                </div>
                <div className="field--wrapper">
                    <label>Password:</label>
                    <input 
                        type="password"
                        required
                        name="password1"
                        placeholder="Enter password"
                        value={credentials.password1}
                        onChange={handleInputChange}
                     />
                </div>
                <div className="field--wrapper">
                    <label>Confirm Password:</label>
                    <input 
                        type="password"
                        required
                        name="password2"
                        placeholder="Confirm password"
                        value={credentials.password2}
                        onChange={handleInputChange}
                     />
                </div>
                <div className="field--wrapper">
                    <input className="btn btn--lg btn--main" type="submit" value="Register" />
                </div>
            </form>

            <p>
                Already have an account? Login <Link to="/login">here</Link>
            </p>
        </div>

    </div>
  )
}

export default RegisterPage