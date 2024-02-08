import React, { useState } from 'react'

const From = () => {
    const [name ,setName] = useState('')
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')

    const SubmitName = (event) =>{
        setName(event.target.value)
    }
    const SubmitEmail = (e) =>{
        setEmail(e.target.value)
    }
    const SubmitPassword = (ariful) =>{
        setPassWord(ariful.target.value)
    }
    const SubmitAllInfo = (e) => {
        console.log("my name is:",name,"email is",email,"passwore is" ,passWord)
        e.preventDefault()
    }
  return (
    <div className='container'>
      <h1>Registaion Form </h1>
      <form action="" className='form' onSubmit={SubmitAllInfo}>
      <div className="mb-3">
        <label htmlFor="" >Name</label>
        <input className='form-control' type="text"  name='name' id='name' placeholder='Enter Your Name' required value={name} onChange={SubmitName}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" >Email</label>
        <input className='form-control' type="email"  name='email' id='email' placeholder='Enter Your email' required value={email} onChange={SubmitEmail}/>
      </div>
      <div className="mb-3">
        <label htmlFor="" >password</label>
        <input className='form-control' type="password"  name='password' id='password' placeholder='Enter Your password' required value={passWord} onChange={SubmitPassword}/>
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default From
