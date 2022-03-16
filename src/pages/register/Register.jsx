import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo' >totheworld</h3>
                <span className='loginDesc' >Connect with friend and the world on totheworld</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' className="loginInput" />
                    <input placeholder='Email' className="loginInput" />
                    <input placeholder='Password' className="loginInput" />
                    <input placeholder='PasswordAgain' className="loginInput" />
                    <button className="loginbutton">Sign  Up</button>
                    
                    <button className="loginRegisterButton">log Into Account</button>

                </div>
            </div>
        </div>

    </div>
  )
}
