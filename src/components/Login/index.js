import './index.css'

const Login = () => (
  <div className="bg-container">
    <div className="login-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
          alt="website login"
        />
      </div>
      <div>
        <h1>Welcome Back</h1>
        <label htmlFor="userId">User ID</label>
        <input type="text" placeholder="Enter User ID" id="userId" />
        <label htmlFor="pin">PIN</label>
        <input type="text" placeholder="Enter PIN" id="pin" />

        <button type="button">Login</button>
      </div>
    </div>
  </div>
)

export default Login
