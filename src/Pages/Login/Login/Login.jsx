import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {

    const {createUserWithGoogle} = useContext(AuthContext);
    const [error , setError] = useState('')

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

    }

    // handle google Login
    const handleGoogleLogin =()=>{
        createUserWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
        })
    }
    return (
        <div className=' mt-4 border w-1/2 mx-auto py-4 rounded-md'>
            <form onSubmit={handleLogin} className='flex justify-center items-center flex-col space-y-2'>
                <div className="form-control ">   
                 <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />   
                </div>
                <div className="form-control ">   
                 <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full" />   
                </div>
                <button className='btn-primary' type='submit'>Login</button>
                <p>Don't Have an Account? <Link to="/register" className='text-violet-800 underline'>Register</Link></p>
            </form>
            <div className='flex flex-col space-y-2 mx-10 mt-10'>
            <button onClick={handleGoogleLogin} className='border border-violet-800 px-8 py-2 rounded-lg hover:bg-violet-600 '>Login With Google</button>
            <button className='border border-violet-800 px-8 py-2 rounded-lg hover:bg-violet-600 '>Login With Github</button>

            </div>
        </div>
    );
};

export default Login;