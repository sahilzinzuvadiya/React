import React, { useState } from 'react'

export default function Formvalidation() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, serPassword] = useState("")
  const [username, setUsername] = useState("")
  const [date, setDate] = useState("")
  const [pincode, setPincode] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [pancard, setPancard] = useState("")
  const [err, setErr] = useState({})

  const handlesubmit = (e) => {
    e.preventDefault();
    let namereg = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*/
    let numberre = /^[6-9]\d{9}$/
    let email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let password = /^.{6,}$/
    let username = /^[a-zA-Z0-9_]{3,16}$/
    let date = /^\d{4}-\d{2}-\d{2}$/
    let pincode = /^\d{6}$/
    let aadhar = /^\d{12}$/
    let pancard = /^[A-Z]{5}[0-9]{4}[A-Z]$/

    if (!namereg.test(name)) {
      setErr({
        one: "Name is not valid",

      });
    }
    else if (!numberre.test(number)) {
      setErr({
        two: "Phone Number is not valid"
      });
    }
    else if (!email.test(email)) {
      setErr({
        three: "email is not valid"
      });
    }
    else if (!password.test(password)) {
      setErr({
        four: "Password is not valid"
      });
    }
    else if (!username.test(username)) {
      setErr({
        five: "Username is not valid"
      });
    }
    else if (!date.test(date)) {
      setErr({
        six: "Date is not valid"
      });
    }
    else if (!pincode.test(pincode)) {
      setErr({
        seven: "Pincode is not valid"
      });
    }
    else if (!aadhar.test(aadhar)) {
      setErr({
        eight: "Aadhar Number is not valid"
      });
    }
    else if (!pancard.test(pancard)) {
      setErr({
        nine: "Pancard Number is not valid"
      });
    }
    else {
      setErr({
        one: "",
        two: ""

      });
      alert("Successfully submit form")
    }

  }
  return (
    <center>
    <div class='mainform'>
      <form onSubmit={handlesubmit}>
        <input type='text' placeholder='Enter your name' onChange={(e) => setName(e.target.value)}></input>
        <span>{err.one}</span>
        <input type='text' placeholder='Enter your mobile number' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.two}</span>
        <input type='text' placeholder='Enter your email' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.three}</span>
        <input type='text' placeholder='Enter your password' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.four}</span>
        <input type='text' placeholder='Enter your username' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.five}</span>
        <input type='text' placeholder='Enter date' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.six}</span>
        <input type='text' placeholder='Enter pincode' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.seven}</span>
        <input type='text' placeholder='Enter your Aadhar' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.eight}</span>
        <input type='text' placeholder='Enter your pancard' onChange={(e) => setNumber(e.target.value)}></input>
        <span>{err.nine}</span>
        <button type='submit'><span></span>Submit</button>
      </form>

    </div>
    </center>
  )
}



