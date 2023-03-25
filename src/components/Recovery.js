import React from 'react'
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import avatar from "../assets/profile.png";
import bg from '../assets/Background.png';
import { passwordValidate } from '../helper/validate';




export default function Recovery() {

  const formik = useFormik({
    initialValues: {
      password: ""
    },
    validate: passwordValidate,
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
            <h4 className='text-4xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>Enter OTP to recover your password</span>
          </div>
          <form className='pt-20' onSubmit={formik.handleSubmit}>
            <div className='text-box flex flex-col items-center gap-6'>
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-500-red font-bold'>
                  Please enter 6 digit OTP sent to your emaill address.
                </span>
                <input {...formik.getFieldProps('password')} type="password" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg mt-3' placeholder='OTP Here' />
              </div>

              <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-12" type='submit'>Recover Password</button>
            </div>

            <div className='text-center py-4'>
              <span>Can't get OTP?<button className='text-red-500 ml-2'>Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

