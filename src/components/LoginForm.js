import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

function LoginForm() {

  const [email, updateEmail] = useState('')
  const [password, updatePassword] = useState('')

  const Login = async () => {
    const rawResponse = await fetch('http://localhost:3042/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password": password
    })
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }

  return (
    <div
      className={`flex flex-col items-center justify-between p-5 
    w-[80%] max-w-[500px] rounded-[10px] absolute
     top-[25%] left-[45%] shadow-2xl bg-white`}
    >
      <div className="text-left w-full">
        <h1 className="text-3xl mt-3 font-extrabold">Get Started</h1>
      
        <h6  className=" text-sm text-gray-500">Don't have an account? <Link to="/register">
          Register here
        </Link>
          </h6>
      </div>

      <div className="flex flex-col items-center justify-center h-full w-full">
        <button className="my-5 border-[1px] border-gray-400 rounded-lg p-2 text-sm font-bold h-10 w-[75%] max-w-400px">Sign in with Google</button>
        
        <div className="flex row w-full items-center justify-between">
          <hr className=" bg-slate-400 w-[45%]" />
          <h4 className=" text-slate-400">or</h4>
          <hr className=" bg-slate-400 w-[45%]" />
        </div>
        <h3 className=" mr-auto my-5"></h3>

        <form className="h-full flex flex-col  w-full">
          <div className="flex flex-col pb-5">
            <label htmlFor="">Email</label>

            <input className="custom-input" type="email" value={email} onChange={(event) => updateEmail(event.target.value)} />
          </div>

          <div className="flex flex-col pb-5">
            <div className="flex justify-between">
              <label htmlFor="">Password</label>
          
              <a href="#" className="">Forgotten password?</a>
            </div>
          
            <input className="custom-input" type="password" value={password} onChange={(event) => updatePassword(event.target.value)} />
          </div>

          <CustomButton
            style={{ margin: "auto" }}
            displayText="Login"
            function={() => Login}
            color="blue"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
