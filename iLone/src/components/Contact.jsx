import React from "react";
import {useForm} from 'react-hook-form'

function Contact() {
   const{
      register,
      handleSubmit,
    } = useForm()

  return (
    <>
      <div className="h-full w-3/6 flex flex-col items-center">
        <div className="h- mt-4 flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-2xl font-semibold mb-3">
            Have questions or feedback? Reach out to us!
          </p>
        </div>

        <div className="h- w-[65%] flex justify-center items-center my-12">
          <form onSubmit={handleSubmit()} className="w-[70%] flex flex-col  gap-8">
            <label className="flex justify-around">
              Name:
              <input {...register('Gender')} name="name" required className="outline-1"/>
            </label>
            <label className="flex justify-around">
              Email:
              <input {...register('Gender')} type="email" name="email" required className="outline-1"/>
            </label>
            <label className="flex justify-around">
              Phone No:
              <input {...register('Gender')} type="phone number" name="phone number" required className="outline-1"/>
            </label>
            <label className="flex justify-around it">
              Message:
              <input {...register('Gender')} name="message" required className="h-22 outline-1"/>
            </label>
            <button type="submit" className="h-10 rounded-sm bg-blue-600 text-white">Send Message</button>
            {/* {status && <p className="status-message">{status}</p>} */}
          </form>
        </div>

        
      </div>
    </>
  );
}

export default Contact;

