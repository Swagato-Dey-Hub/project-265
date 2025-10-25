import React from 'react'
import { useForm } from 'react-hook-form'

function Register({switchtoLogin}) {

    const {
          register,
          handleSubmit,
        } = useForm()
  
        const onSubmit = (data) => {
          console.log(data);
        }

  return (
    <>
        <div className='h-full w-3/4 flex justify-center items-center'>
          <div className='h-[75%] w-[70%] border-1 rounded-xl p-4 flex flex-col items-center justify-between'>
            <h1 className="font-bold text-2xl my-3">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 flex flex-col items-center gap-4 '>           
              <input {...register('name')}type="text" name='fullname' placeholder='Fullname' className='h-10 w-full border-1 p-1 text-sm'/>
              <input {...register('email')} type="text"  placeholder='Email id' className='h-10 w-full border-1 p-1 text-sm'/>
              <input {...register('Phone number')} type="text"  placeholder='Phone number' className='h-10 w-full border-1 p-1 text-sm'/>
              <input {...register('Password')} type="text"  placeholder='Password' className='h-10 w-full border-1 p-1 text-sm'/>
              <input {...register('Conform password')} type="text" placeholder='Conform password' className='h-10 w-full border-1 p-1 text-sm'/>
              <button className='h-10 w-full border-1 rounded-xl bg-blue-700 text-white'>Register</button>            
            </form>
            <div className='h-6 w-4/5 flex justify-center gap-2 my-[27px]'>
              <div className='flex items-center  gap-2'>
                <h1 className='font-semibold'>Already have an account ?</h1>
             <button onClick={switchtoLogin } className='text-blue-700 font-bold text-lg'>Log in</button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Register