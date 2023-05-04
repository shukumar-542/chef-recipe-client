import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile, getAuth } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const auth = getAuth(app)
const Register = () => {
    const { createUser, user, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    // console.log(from);
    
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        setError('')
        setSuccess('')
        if (!email) {
            setError('Enter Your email');
            return
        }
        if (!password) {
            setError('Enter Your Password')
            return
        }

        if (password.length < 6) {
            setError('password length must be 6 character');
            return
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser({ ...user, displayName: name, photoURL: photo })
                console.log(loggedUser);
                updateUser(name, photo)
                navigate(from)
                setSuccess('user Create successfully')
                setError('')


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })



    }

    // update users display name and photoURl
    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    return (
        <div className=' mt-10 shadow-lg border w-1/2 mx-auto py-12 mb-10 rounded-md bg-gray-100 '>
            <h1 className='text-center my-4 text-3xl text-orange-500 font-bold'>Register</h1>
            <form onSubmit={handleRegister} className='flex justify-center items-center flex-col space-y-2'>
                <div className="form-control w-1/2">
                    <input type="text" name='name' placeholder="Enter Name" className="input input-bordered " />
                </div>

                <div className="form-control w-1/2">
                    <input type="email" name='email' placeholder="Enter Email" className="input input-bordered " />
                </div>
                <div className="form-control w-1/2">
                    <input type="password" name='password' placeholder="Enter Password" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-1/2">
                    <input type="text" name='photo' placeholder="Enter photo url" className="input input-bordered " />
                </div>
                <button className='btn-primary w-1/2' type='submit'>Register</button>
                <p>Have an Account? <Link to="/login" className='text-orange-500 underline'>Login</Link></p>
            </form>

            <div className='text-center my-2 text-red-500'>
                {error}
            </div>
            <div className='text-center my-2 text-green-500'>
                {success}
            </div>


        </div>
    );
};

export default Register;