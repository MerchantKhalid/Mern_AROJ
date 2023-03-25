import React from 'react'
import { Formik, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import avatar from "../assets/profile.png";
import bg from '../assets/Background.png';
import { passwordValidate, resetPasswordValidation } from '../helper/validate';




export default function Reset() {

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: ""

    },
    validate: resetPasswordValidation,
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
            <h4 className='text-4xl font-bold'>Reset</h4>
            <span className='py-4 text-xl text-center w-2/3'>Enter new Password</span>
          </div>
          <form className='py-20' onSubmit={formik.handleSubmit}>


            <div className='text-box flex flex-col items-center gap-6 '>
              <input {...formik.getFieldProps('password')} type="password" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='New password' />
              <input {...formik.getFieldProps('confirm_pwd')} type="password" className='border-0 px-5 py-4 rounded-xl w-3/4 shadow-sm text-lg' placeholder='Confirm password' />
              <button className="border bg-indigo-500 w-3/4 py-4 rounded-lg text-gray-50 text-xl shadow-sm text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 mb-12" type='submit'>Reset</button>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}
