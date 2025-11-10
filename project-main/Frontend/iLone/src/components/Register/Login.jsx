import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

function Login({ switchtoRegister }) {
  const { register, handleSubmit,reset } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      // Make the POST request to backend
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      // Parse JSON response
      const result = await response.json();
      // Handle errors from server
      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }
      console.log("✅ Login successful:", result);
      // Save token locally (optional)
      localStorage.setItem("token", result.token);
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("authChange"));
      reset();
    alert("Login Successful!");
    navigate("/profile");
    } catch (error) {
      console.error("❌ Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <div className="h-full w-3/4 border-  flex flex-col justify-center items-center">
        <div className="h-[65%] w-[70%] border-1 rounded-xl p-4 flex flex-col items-center justify-center gap-4 ">
          <h1 className="font-bold text-2xl my-5">Log in</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="w-3/4 flex flex-col items-center gap-4 mt-5 mb-5"
          >
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="h-10 w-full border-1 p-1"
            />
            <input
              {...register("password")}
              type="text"
              placeholder="Password"
              className="h-10 w-full border-1 p-1"
            />
            <button className="h-10 w-full rounded-xl bg-blue-700 text-white">
              Log in
            </button>
            {/* <button className='h-10 w-4/5'>Forgot Password?</button> */}
          </form>
          <div className="h-12 w-4/5 flex justify-center gap-2 my-[27px]">
            <div className="flex items-center justify-center gap-2">
              <h1 className="font-semibold">Don't have an account ?</h1>
              <button
                onClick={switchtoRegister}
                className="text-blue-700 font-bold text-lg"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
