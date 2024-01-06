import React, { useContext } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Button } from 'react-bootstrap';

const Register = () => {
  const {userCreate,userGoogle,profileUpdate} = useContext(AuthContext);
  const navigate = useNavigate()
  
  


  const handleSignup = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    userCreate(email,password)
    .then(result=>{
      const user = result.user;
      console.log(user)  
      form.reset()  
      navigate('/')
      handleProfile(name ,photoURL)
      
      
      
    })
    .catch(error=>{
      console.log(error)
    })
    
  }

  const handleProfile=(name,photoURL)=>{
    const profile = {
      displayName: name,
      photoURL : photoURL

    }
    profileUpdate(profile)
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
    <form onSubmit={handleSignup}  className='container mt-4 text-light'>
      <h2 className='text-center text-bold text-info'> Register Now </h2>
      <div className='row'>
        <div className="mb-3 col-md-6">
          <label for="exampleInputEmail1" className="form-label">Full Name</label>
          <input type="name" className="form-control" name='name' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleInputEmail1" className="form-label">Photo Url</label>
          <input type="text" className="form-control" name='photoURL' aria-describedby="emailHelp" />
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" name='password' />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" name='confirm' />
      </div>
      <div className="mb-3 form-check">
        <input  type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">I have agreed to the <a className='text-warning' href="https://www.facebook.com/profile.php?id=100075836989269" target='_blank' >Terms and Condition</a></label>
      </div>
      <div>
        <p>Already have an account? <Link to='/login' className='text-warning'>Click here</Link></p>
      </div>
      
      <div className='d-flex flex-row '>
        <button type="submit" className="btn btn-primary" >Signup</button>
        <h3 className='ms-4'>Or</h3>
        <Button onClick={handleGoogle} className='ms-4' variant="outline-info">Google</Button>
      </div>
    </form>
  );
};

export default Register;