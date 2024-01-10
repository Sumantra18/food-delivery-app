import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [email,setEmail]= useState("");
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");

    const navigate=useNavigate();

    const isValidate=()=>{
        let isProceed= true;
        let errmsg='Please enter the value in';
        if(name===null || name===""){
            isProceed=false;
            errmsg +='username';
        }

        if(!isProceed){
            toast.warning(errmsg);
        }
        return isProceed;
    }

    const handleSubmit=(e)=>{
            e.preventDefault();
            let regobj={email,name,password};

            
        if(isValidate())
        {
            // console.log(regobj);
            fetch("http://localhost:8001/users",{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(regobj)
            }).then((res)=>{
                toast.success('Registered Successfully');
                navigate('/login');
    
    
            }).catch((err)=>{
                toast.error('Failed :'+err.message);
            });

        }
      

    }
  return (
    <div className='flex justify-center items-center h-screen'>
        

<form onSubmit={handleSubmit}> 
    <div className='w-96 p-6 shadow-lg bg-gray-200 rounded-md'>

    <h1 className='text-3xl text-center block font-semibold'> <i class="fa-solid fa-user"></i>Register</h1>

    <hr className='mt-3'/>

    <div className='mt-3'>
        <label htmlFor='email' className='block text-base mb-2'>Email ID</label>
        <input type='email' value={email} onChange={e=>setEmail(e.target.value)} id='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter ur email id...'/>

    </div>

    <div className='mt-3'>
        <label htmlFor='username' className='block text-base mb-2'>User Name</label>
        <input type='text'  value={name} onChange={e=>setName(e.target.value)} id='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter username...'/>

    </div>

    <div className='mt-3'>
        <label htmlFor='password' className='block text-base mb-2'>Password</label>
        <input type='password'  value={password} onChange={e=>setPassword(e.target.value)} id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter password...'/>

    </div>

   
    
    

    <div className='mt-5'>
        <button type='submit' className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Sign Up</button>
    </div>
    
    
    </div>
    </form>
    </div>

  )
}

export default Register