import { useState} from 'react';
import contact from "../src/contact.png";


const Form = () => {
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
  const handleSubmitForm = event => {
   alert(`Form Submitted By:
  
  Name:${fullName}
  Mobile Number:${number}
  Email:${email}
  Message:${message}`);
    event.preventDefault(); // prevent page refresh

    // clear all input values in the form
    setFullName('');
    setNumber('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <img src={contact} style={{marginLeft:"170px" ,height:"450px"}}/>
     <center>
     <div className="container contact_div">
               <div className="row" style={{background:"grey"}}>
             <div className="col-md-6 col-10 mx-auto"><form onSubmit={handleSubmitForm}>
        <h1 style={{fontSize:"60px"}}> Contact Us</h1>
        <label className='mb-3'><h5> Full name:</h5>
          <input style={{height:"40px", width:"400px"}}
            id="full_name"
            name="full_name"
            type="text"
            onChange={event => setFullName(event.target.value)}
            value={fullName}
          />
        </label>
        <br></br>
        <label className='mb-3'> <h5>Mobile Number:</h5>
          <input style={{height:"40px", width:"400px"}}
            id="number"
            name="number"
            type="number"
            value={number}
            onChange={event => setNumber(event.target.value)}
          />
        </label>
        <br></br>
        <label className='mb-3'> <h5>Email:</h5>
          <input style={{height:"40px", width:"400px"}}
            id="email"
            name="email"
            type="email"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <br></br>
        <label className='mb-3'> <h5> Message:</h5>
          <textarea style={{width:"400px"}}
            id="message"
            name="message"
            type="message"
            rows="3"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </label><br></br>
        <button type="submit" className='btn-get-started'>Submit form</button>
      </form>
      </div>
      </div>
      </div>
      </center> 
    </div>
  );
};

export default Form;

// import React, { useState, useRef } from "react";

// function Contact() {
//   const refElement = useRef("");
//   function Reset() {
//     setData("")
//   }
//   const [data, setData] = useState({
//     fullname: '',
//     phone: '',
//     email: '',
//     message: '',
//   })
//   const InputEvent = (event) => {
//     const { name, value } = event.target;
//     setData((preVal) => {
//       return {
//         ...preVal,
//         [name]: value,
//       }
//     })
//   };
//   const formSubmit = (e) => {
//     e.preventDefault();
//     alert(`
//   Name:${data.fullname}
//   Mobile Number:${data.phone}
//   Email:${data.email}
//   Message:${data.message}`);
//   }
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center">Contact Us
//         </h1>
//       </div>
//       <div className="container contact_div">
//         <div className="row">
//           <div className="col-md-6 col-10 mx-auto">
//             <form onSubmit={formSubmit}>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Full Name</label>
//                 <input ref={refElement} type="text" class="form-control" id="exampleFormControlInput1"
//                   name="fullname"
//                   value={data.fullname}
//                   onChange={InputEvent}
//                   placeholder="Enter Your Name" />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Phone</label>
//                 <input ref={refElement} type="number" class="form-control" id="exampleFormControlInput1"
//                   name="phone"
//                   value={data.phone}
//                   onChange={InputEvent}
//                   placeholder="Phone Number" />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                 <input ref={refElement} type="email" class="form-control" id="exampleFormControlInput1"
//                   name="email"
//                   value={data.email}
//                   onChange={InputEvent}
//                   placeholder="name@example.com" />
//               </div>
//               <div className="mb-3">
//                 <label for="exampleFormControlTextarea1" class="form-label">Message</label>
//                 <textarea ref={refElement} className="form-control" id="exampleFormControlTextarea1" rows="3"
//                   name="message"
//                   value={data.message}
//                   onChange={InputEvent}
//                 ></textarea>
//               </div>
//               <div class="col-12">
//                 <button class="btn btn-outline-primary" type="submit" onClick={Reset}>Submit form</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>);

// };

// export default Contact;