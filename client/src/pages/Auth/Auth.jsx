import React, {useState} from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () =>{
    const[isSignUp, setIsSignUp] = useState(true)

    const[data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: ""})

    const handleChange = (e)=> {
        setData({...data, [e.target.name]: e.target.value})
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
            <form action="" className='infoForm authForm'>
                <h3>{isSignUp ? "Sign up":"Log In"}</h3>
                {isSignUp && 
                    <div>
                        <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange}/>
                        <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange}/>
                    </div>

                }

                <div>
                <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange}/>
                </div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange}/>
                    {isSignUp &&
                        <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpass' onChange={handleChange}/>
                    }
                    
                </div>
                <div>
                    <span style={{fontsize:"12px", cursor:"pointer"}} onClick = {()=>setIsSignUp((prev)=>!prev)}>{ isSignUp ? "Already have an account? Login": "Don't have an account? Sign Up"}</span>
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