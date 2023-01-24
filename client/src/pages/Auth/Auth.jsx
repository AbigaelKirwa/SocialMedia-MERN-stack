import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch} from 'react-redux'

const Auth = () =>{
    const[isSignUp, setIsSignUp] = useState(true)

    const dispatch = useDispatch()

    const[data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})

    const[confirmPass, setConfirmPass] = useState(true)

    const handleChange = (e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(isSignUp)
        {
            if(data.password !== data.confirmpass){
                setConfirmPass(false)
            }
        }
    }

    const resetForm=()=>{
        setConfirmPass(true);
        setData({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})
    }
    return(
        
        <div className="Auth">
            {/* left side */}
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>Explore the ideas throughout the world</h6>
                </div>
            </div>
            {/* right side */}
            
            <div className="a-right">
            <form action="" className='infoForm authForm' onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign up":"Log In"}</h3>
                {isSignUp && 
                    <div>
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname}/>
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname}/>
                    </div>

                }

                <div>
                <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} value={data.username}/>
                </div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password}/>
                    {isSignUp &&
                        <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpass' onChange={handleChange} value={data.confirmpass}/>
                    }
                    
                </div>
                <span style={{display: confirmPass? "none": "block", color:"red", fontSize:"12px", alignSelf:"flex-end", marginRight:"5px" }}>
                    * Confirm password is not same
                </span>
                <div>
                    <span style={{fontsize:"12px", cursor:"pointer"}} onClick = {()=>{setIsSignUp((prev)=> !prev); resetForm()}}>{ isSignUp ? "Already have an account? Login": "Don't have an account? Sign Up"}</span>
                </div>
                <button className="button infoButton" type='submit'>{isSignUp ? "Signup":"Log In"}</button>
            </form>
        </div>

        </div>
    )
}


function Signup(){
    return(
        <div className="a-right">
            <form action="" className='infoForm authForm'>
                <h3>Sign up</h3>
                <div>
                    <input type="text" placeholder='First Name' className='infoInput' name='firstName'/>
                    <input type="text" placeholder='Last Name' className='infoInput' name='lastName'/>
                </div>
                <div>
                <input type="text" placeholder='Username' className='infoInput' name='username'/>
                </div>
                <div>
                    <input type="text" placeholder='Password' className='infoInput' name='password'/>
                    <input type="text" placeholder='Confirm Password' className='infoInput' name='confirmpass'/>
                </div>
                <div>
                    <span style={{fontsize:"12px"}}>Already have an account? Login</span>
                </div>
                <button className="button infoButton" type='submit'>Signup</button>
            </form>
        </div>
    )
}



export default Auth