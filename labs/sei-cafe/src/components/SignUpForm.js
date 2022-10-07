import { useState } from "react"
import {signUp} from '../utilities/users-service'

export default function SignUpForm(props) {

const [errorState, setErrorState]= useState("");


//setting defaults 
//formData is an object that uses state that we can change with our form
const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
})

//cannot submit form unless passwords match
const [disable, setDisable] = useState(formData.password !== formData.confirm)
    
// const disable = formData.password !== formData.confirm;

// const handleSubmit = (event) => {
//     //prevents defautls beahvior
//     event.preventDefault();
//     //turns an object into a string
//     alert(JSON.stringify(formData));
//     console.log("Submitted")
// }


const handleSubmit = async (evt) => {
  // Prevent form from being submitted to the server
  evt.preventDefault();
  try {
    const payload = {
      // formData.email,
      // formData.password,
      // formData.name
      } 
      const user = await signUp(formData);
} catch {
    // An error occurred
    setErrorState({ error: 'Sign Up Failed - Try Again' });
  }
};

//e or event, all of the data regarding event that was triggered
//all the data about that click
//where it was clicked, what element was clicked
//in this case, event is a change event, that you get from the onChange property here.
//the target of the event is the input, because that is what changed
//so all formData = event.target
const handleChange = (event) => {
    //sets all form data, changes email to hello
    // setFormData({...formData, email: "hello"})
    //knows its called email because we put <input name="email"> line 56
    console.log(event.target)
    //[] square brackets in an {} object, allows you to use strings or varibles as keys
    //the brackets allows it to e.target.name to be what it references
    //grab whatever e.target.name and make it the key that is changing
    //name from <input name="">
    setFormData({...formData, [event.target.name]: event.target.value})
}

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
        {/* htmlFor so screen readers know what labels are attached to which input */}
          <label htmlFor="name">Name:</label>
          <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleChange} 
                required 
            />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />

          <label htmlFor="confirm">Confirm</label>
          <input 
            type="password" 
            name="confirm" 
            value={formData.confirm} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" disabled={disable}>SIGN UP</button>

        </form>
      </div>
      <p className="error-message">{errorState}</p>
    </div>
  )
}
