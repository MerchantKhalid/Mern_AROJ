import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import avatar from "../assets/profile.png";
import bg from '../assets/Background.png';
import { usernameValidate } from '../helper/validate.js';
import convertToBase64 from '../helper/convert';



export default function Register() {

  const [file,setFile]= useState()

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values=await Object.assign(values,{profile:file || ''})
      console.log(values)
    }
  })

  // FORMIK DOES NOT SUPPORT FILE UPLOAD SO WE NEED TO CREATE THIS HANDLER
  const onUpload = async e=>{
    const base64=await convertToBase64(e.target.files[0]);
    setFile(base64)
  }

  return (
    <div style={{ background: `url(${bg})` }} className='container mx-auto'>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className="border-4 border-gray-50 shrink-0 h-3/4 w-[30%] rounded-3xl py-20 px-7 min-w-max">
          <div className='title flex flex-col items-center'>
            <h4 className='text-4xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center'>Happy to join you!</span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img src={file || avatar} className=" border-4 border-gray-100 w-[135px] rounded-full shadow-lg cursor-pointer" alt="profile" />
              </label>
              <input onChange={onUpload} className='hidden' type='file' id="profile" name='profile'/>

            </div>

            <div className='text-box flex flex-col items-center gap-6 '>
              <input {...formik.getFieldProps('email')} type="text" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='Email*' />
              <input {...formik.getFieldProps('username')} type="text" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='Username*' />
              <input {...formik.getFieldProps('password')} type="password" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='Password*' />
              <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-12" type='submit'>Register</button>
            </div>

            <div className='text-center py-4'>
              <span>Already have an account?<Link className='text-red-500' to="/">Register</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

