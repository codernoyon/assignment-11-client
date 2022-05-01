import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Register = () => {

    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });
    const [showPasseword, setShowPassword] = useState(false);
    const [confirmShowPasseword, setConfirmShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState({ value: '', error: '' });
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleName = inputName => {
        if (inputName) {
            setName({ value: inputName, error: '' })
        } else {
            setName({ value: '', error: 'Your name' })
        }
    }

    const handleEmail = inputEmail => {
        if (/\S+@\S+\.\S+/.test(inputEmail)) {
            setEmail({ value: inputEmail, error: '' })
        } else {
            setEmail({ value: '', error: 'Input a valid email' })

        }
    }

    const handlePassword = inputPassword => {
        if (inputPassword.length < 6) {
            setPassword({ value: '', error: 'Too short Password' })
        } else {
            setPassword({ value: inputPassword, error: '' })
        }

    }

    const handleConfirmPassword = inputConfirmPassword => {
        if(inputConfirmPassword === password.value){
            setConfirmPassword({ value: inputConfirmPassword, error: '' })
        }else{
            setConfirmPassword({ value: '', error: "Password didn't matched" })
        }
    }


    const handleCreateUser = event => {
        event.preventDefault();
    }

    console.log(email);


    return (
        <div>
            <PageTitle title={'Register'} />
            <div className="container px-5 md:px-0 mx-auto lg:px-16 flex items-center justify-center h-screen">
                <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md border-t">
                    <div className="px-6 py-4">
                        <h2 className="text-3xl font-bold text-center text-gray-700 ">Register</h2>
                        <p className="mt-1 text-center text-gray-500 ">Create an account</p>
                        <form onSubmit={handleCreateUser}>
                            <div className="w-full mt-4">
                                <input onBlur={(e) => handleName(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Name" aria-label="Name" />
                                {
                                    name?.error && (<small className='text-red-400'>{name.error}</small>)
                                }
                            </div>

                            <div className="w-full mt-4">
                                <input onBlur={(e) => handleEmail(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                                {
                                    email?.error && (<small className='text-red-400'>{email.error}</small>)
                                }
                            </div>

                            <div className="w-full mt-4 relative">
                                <input onBlur={(e) => handlePassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type={showPasseword ? 'text' : 'password'} placeholder="Password" aria-label="Password" />
                                <button onClick={() => setShowPassword(!showPasseword)} type='button' className='absolute top-3 right-3'>
                                  {showPasseword ? <MdVisibility/> : <MdVisibilityOff/> }  
                                </button>
                                {
                                    password?.error && (<small className='text-red-400'>{password.error}</small>)
                                }
                            </div>

                            <div className="w-full mt-4 relative">
                                <input onBlur={(e) => handleConfirmPassword(e.target.value)} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type={confirmShowPasseword ? 'text' : 'password'} placeholder="Confirm password" aria-label="Password" />
                                <button onClick={() => setConfirmShowPassword(!confirmShowPasseword)} type='button' className='absolute top-3 right-3'>
                                  {confirmShowPasseword ? <MdVisibility/> : <MdVisibilityOff/> }  
                                </button>
                                {
                                    confirmPassword?.error && (<small className='text-red-400'>{confirmPassword.error}</small>)
                                }
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <label className='text-sm' htmlFor="terms"><input className='mr-2' type="checkbox" name="" id="terms" />Terms and condition</label>
                                <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-400 focus:outline-none" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center justify-center  text-center">
                        <span className="text-sm text-gray-600 ">Already have an account? </span>
                        <Link to='/login' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Login</Link>
                    </div>
                    <div className="px-5 pb-4">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;