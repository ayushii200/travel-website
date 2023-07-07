import {useState} from "react";

const Ticket = () => {
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [destination, setDestination] = useState('');
  
   
    const handleSubmitForm = event => {
     alert(`Form Submitted By:
    
    Name:${fullName}
    Mobile Number:${number}
    Email:${email}
    Destination:${destination}`);
      event.preventDefault(); // prevent page refresh
  
      // clear all input values in the form
      setFullName('');
      setNumber('');
      setEmail('');
      setDestination('');
    };
    return (
        <div>
         <center>
         <div className="container contact_div">
                   <div className="row">
                 <div className="col-md-6 col-10 mx-auto"><form onSubmit={handleSubmitForm}>
            <h1 style={{fontSize:"50px"}}> Travel Booking Form</h1>
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
            <label className='mb-3'> <h5>Destination:</h5>
              <input style={{height:"40px", width:"400px"}}
                id="destination"
                name="destination"
                type="destination"
                onChange={event => setDestination(event.target.value)}
                value={destination}
              />
            </label>
            <br></br>
            <button type="submit" className='btn-get-started'>Book</button>
          </form>
          </div>
          </div>
          </div>
          </center> 
        </div>
      );
    };
export default Ticket;