import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register({ switchtoLogin }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        phoneno: data.phoneno,
        password: data.password,
      };
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        // backend sent an error
        throw new Error(result.message || "Registration failed");
      }
      console.log("Signup response:", result);
      reset();
      // optional: switch to login after successful signup
      switchtoLogin();
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "Something went wrong during registration");
    }
  };

  return (
    <>
      <div className="h-full w-3/4 flex justify-center items-center">
        <div className="h-[75%] w-[70%] border-1 rounded-xl p-4 flex flex-col items-center justify-between">
          <h1 className="font-bold text-2xl my-3">Register</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-3/4 flex flex-col items-center gap-4 "
          >
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="Name"
              className="h-10 w-full border-1 p-1 text-sm"
            />
            <input
              {...register("email")}
              type="text"
              placeholder="Email id"
              className="h-10 w-full border-1 p-1 text-sm"
            />
            <input
              {...register("phoneno")}
              type="text"
              placeholder="Phone number"
              className="h-10 w-full border-1 p-1 text-sm"
            />
            <input
              {...register("password")}
              type="text"
              placeholder="Password"
              className="h-10 w-full border-1 p-1 text-sm"
            />
            <button className="h-10 w-full border-1 rounded-xl bg-blue-700 text-white">
              Register
            </button>
          </form>
          <div className="h-6 w-4/5 flex justify-center gap-2 my-[27px]">
            <div className="flex items-center  gap-2">
              <h1 className="font-semibold">Already have an account ?</h1>
              <button
                onClick={switchtoLogin}
                className="text-blue-700 font-bold text-lg"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
