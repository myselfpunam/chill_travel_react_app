import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from 'react-bootstrap';

const Login = () => {
  const { userLogin ,userGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
        navigate(from , {replace:true})
      })
      .catch(() => {

      })
  }
  const handleGoogle = () => {
    userGoogle()
    .then(result => {
      const user = result.user
      console.log(user)
      
    })
    .catch(() => {

    })
  } 
  
  return (
    <form onSubmit={handleLogin} className='container mt-4 text-light'>
      <h2 className='text-center text-bold text-info'> Login Now </h2>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" name='password' />
      </div>
      <div>
        <p>Donot have an account? <Link to='/registration' className='text-warning'>Click here</Link></p>
      </div>

      <div className='d-flex flex-row '>
        <button type="submit" className="btn btn-primary" >Login</button>
        <h3 className='ms-4'>Or</h3>
        <Button onClick={handleGoogle} className='ms-4' variant="outline-info">Google</Button>
      </div>
    </form>
  );
};

export default Login;