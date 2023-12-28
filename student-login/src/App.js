import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [inputs, setInputs] = useState({});
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto", // Center the form
    padding: "20px",
    borderRadius: "10px", // Add round border
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Add a subtle box shadow
    backgroundColor: "maroon",
    color: "white"
    // backgroundImage: `url(${require('./components/formbg.jpg')})`, // Use require for local images
    // backgroundSize: "cover", // Adjust the background size property as needed
  };
  
  const inputStyle = {
    width: "100%",
    margin: "8px 0",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    backgroundColor: "peachpuff"
  };
  
  const buttonStyle = {
    backgroundColor: "DodgerBlue",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  position: "relative"
  // backgroundImage: `url(${require('./components/raingif.gif')})`, // Use the GIF URL directly
  // backgroundSize: "cover",// Make the container position relative
};

const raindropOverlayStyle = {
  content: "''",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1
  // backgroundImage: `url(${require('./components/raingif.gif')})`, // Use the GIF URL directly
  // backgroundSize: "cover",
  // filter: "blur(5px)", // Optional: Add a blur effect
};
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted...!')
    console.log(inputs);
  }

  return (
    <div style={containerStyle} >
    <form onSubmit={handleSubmit} style={formStyle}>
    <h3>Login form</h3>
    <label>Enter your name:
    <input 
      type="text" 
      name="username" 
      value={inputs.username || ""} 
      onChange={handleChange}
      style={inputStyle}
    />
    </label>
    <br/>
    <label>Enter your mobile number:
      <input 
        type="number" 
        name="mobile" 
        value={inputs.mobile || ""} 
        onChange={handleChange}
        style={inputStyle}
      />
      </label>
      <br/>
      <label> Enter your email id:
        <input
         type="email"
         name="mail"
         value={inputs.mail || ""}
         onChange={handleChange}
         style={inputStyle}
        />
      </label>
      <br/>
      <input type="submit" style={buttonStyle}/>
  </form>
  </div>
  );
}

export default App;
