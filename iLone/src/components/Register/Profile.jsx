import React,{useState} from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidUserRectangle } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Profile() {
   const [showPassword, setShowPassword] = useState(false);
  const password = "g35edg37dh37";
  return (
    <>
      <div className='h-full w-3/6 border-1  flex flex-col  items-center'>
      <div className="font-bold text-2xl my-5">Profile</div>
        <div className='h-[80%] w-[65%] border-1 p-2 flex flex-col items-center gap-4 mt-'>
          <div className='h-25 w-full flex justify-center'>
            <div className='h-18 w-18 border-1 rounded-full flex justify-center items-center'><AiOutlineUser className='h-10 w-10 rounded-full'/></div>
          </div>
          <div className='h-full w-[60%] flex flex-col gap-8 p-3'>
            <div className='flex items-center gap-7'>
              <BiSolidUserRectangle className='h-9 w-9'/>
              <div>
                <div className='text-lg font-bold'>Name</div>
                <div className='text-sm font-bold'>Bhopal</div>
              </div>
            </div>
            <div className=' flex items-center gap-7'>
              <MdEmail className='h-9 w-9'/>
              <div>
                <div className='text-lg font-bold'>Email</div>
                <div className='text-sm font-bold'>Bhopal@gmail.com</div>
              </div>
            </div>
            <div className='flex  items-center gap-7'>
              <FaPhoneAlt className='h-7 w-7'/>
              <div>
                <div className='text-lg font-bold'>Pnone No</div>
                <div className='text-sm font-bold'>25345436738</div>
              </div>
            </div>
            <div className='flex  items-center gap-7'>
              <TbLockPassword className='h-9 w-9'/>
              <div>
                <div className='text-lg font-bold'>Password</div>
                <div className='flex items-center gap-2 text-md font-bold'>
                   {showPassword ? password : "••••••••••••"}
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-600 hover:text-black "
                  >
                    {showPassword ? (
                    <AiOutlineEyeInvisible className="h-6 w-6" />
                    ) : (
                    <AiOutlineEye className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile