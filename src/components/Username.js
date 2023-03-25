import React from 'react'
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import avatar from "../assets/profile.png";
import bg from '../assets/Background.png';
import { usernameValidate } from '../helper/validate.js';



export default function Username() {

    const formik = useFormik({
        initialValues: {
            username: ""
        },
        validate:usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })
    return (
        <div style={{ background: `url(${bg})` }} className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className="border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max">
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-4xl font-bold'>Please Login</h4>
                        <span className='py-4 text-xl w-2/3'>Explor with us</span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <img src={avatar} className=" border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer" alt="profile" />
                        </div>

                        <div className='text-box flex flex-col items-center gap-6 '>
                            <input {...formik.getFieldProps('username')} type="text" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='User Name' />
                            <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-12" type='submit'>Let's Go</button>
                        </div>

                        <div className='text-center py-4'>
                            <span>Not a member?<Link className='text-red-500' to="/register">Please Register</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
