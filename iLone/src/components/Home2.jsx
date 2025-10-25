import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from "axios";

function Home() {
  const{
    register,
    handleSubmit,
  } = useForm()
  const [prediction, setPrediction] = useState(null);

  
    const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      const response = await axios.post("http://localhost:5000/api/getloanstatus", data);
      // Assuming your backend returns something like { prediction: "Approved" }
      console.log("Server response:", response.data);
      // sending loan status result from backend
      console.log("Loan Status:", response.data.result.loan_status);
      // setPrediction(response.data.prediction);
      setPrediction(response.data.result.loan_status); 
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setPrediction("Error fetching prediction");
    }
  };

  return (
    <>
    <div className='h-full w-3/6 border-x-1 flex flex-col items-center text-black font-semibold'>
    <div className='w-[80%] mt-3 flex justify-center text-center'>
      Easily predict your loan approval status by providing some details about yourself.
    </div>
    <div className='text-5xl font-bold mt-4 mb-7'><h1>Loan Prediction</h1></div>
    <div className='h-full w-[60%]'>
      <form onSubmit={handleSubmit(onSubmit)} method="post" id='my-form' className='flex flex-wrap justify-center gap-3'>
        <div className='flex flex-col'>
          <label >Gender</label>
          <select {...register('Gender')} className="h-9 w-[180px] border-1 p-1">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> 
        </div>
        <div className='flex flex-col'> 
          <label >Dependents</label>
           <select {...register('Dependents')} className="h-9  w-[180px] border-1 p-1">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
           </select>
        </div>
         <div className='flex flex-col'>
          <label >Married</label>
          <select {...register('Married')} className="h-9 w-[180px] border-1 p-1">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className='flex flex-col'>
            <label >Education</label>
          <select {...register('Education')} className="h-9 w-[180px] border-1 p-1">
            <option value="Graduate">Graduate</option>
            <option value="Not Graduate">Not Graduate</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label >Self_Employed</label>
          <select {...register('Self_Employed')} className="h-9 w-[180px] border-1 p-1">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
           </select>
        </div>
        <div className='flex flex-col'>
            <label >LoanAmount</label>
          <input  {...register('LoanAmount')} className="h-9 w-[180px] border-1 p-1"/>
        </div>
        <div className='flex flex-col'>
          <label >Applicantincome</label>
          <input  {...register('ApplicantIncome')} className="h-9 w-[180px] border-1 p-1"/>
        </div>
        
        <div className='flex flex-col'>
          <label >CoApplicantincome</label>
          <input {...register('CoapplicantIncome')} className="h-9 w-[180px] border-1 p-1"/>
        </div>
        
        <div className='flex flex-col'>
          <label >Loan_Amount_Term</label>
          <select {...register('Loan_Amount_Term')} className="h-9 w-[180px] border-1 p-1">
            <option value="360.0">360.0</option>
            <option value="180.0">180.0</option>
          </select>
        </div>
         <div className='flex flex-col'>
            <label >Credit_History</label>
          <select {...register('Credit_History')} className="h-9 w-[180px] border-1 p-1">
            <option value="1">1</option>
            <option value="0">0</option>
           </select>
        </div>
        
        <div className='flex flex-col'>
            <label >Property_Area</label>
          <select {...register('Property_Area')} className="h-9 w-[180px] border-1 p-1">
            <option value="Rural">Rural</option>
            <option value="Urban">Urban</option>
            <option value="Semi_Urban">Semi_Urban</option>
           </select>
        </div>
      </form>

      <button type="submit" form="my-form" className='h-8 w-full mt-4 bg-blue-600 rounded-sm text-white'>Predict Loan Approuval</button>

      <div className='flex justify-center items-center gap-2 mt-3'>
      <div>Prediction Result :</div>
      <div className='flex items-center justify-center gap-1 text-sm font-semibold'>
        {prediction}

       {/* <div className={`h-4 w-4 border-1 rounded-sm ${prediction}`}></div> */}
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Home