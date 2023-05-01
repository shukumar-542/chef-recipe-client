import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);
    }
    return (
        <div className=' mt-4 border w-1/2 mx-auto py-4 rounded-md'>
        <form onSubmit={handleRegister} className='flex justify-center items-center flex-col space-y-2'>
            <div className="form-control ">   
             <input type="text" name='name' placeholder="Enter Name" className="input input-bordered " />   
            </div>
            
            <div className="form-control ">   
             <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />   
            </div>
            <div className="form-control ">   
             <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full" />   
            </div>
            <div className="form-control ">   
             <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered " />   
            </div>
            <button className='btn-primary' type='submit'>Register</button>
            <p>Have an Account? <Link to="/login" className='text-violet-800 underline'>Login</Link></p>
        </form>
        
    </div>
    );
};

export default Register;