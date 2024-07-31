// import React, { useState } from 'react';

// const generateRandomCaptcha = () => {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   const captchaLength = 4;
//   let captcha = '';
//   for (let i = 0; i < captchaLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     captcha += characters.charAt(randomIndex);
//   }
//   return captcha;
// };

// export const CaptchaForm = () => {
//   const [captcha, setCaptcha] = useState(generateRandomCaptcha());
//   const [userInput, setUserInput] = useState('');
//   const [isCaptchaValid, setIsCaptchaValid] = useState(false);

//   const handleInputChange = (event) => {
//     setUserInput(event.target.value);
//   };

//   const handleCaptchaRefresh = () => {
//     setCaptcha(generateRandomCaptcha());
//     setUserInput('');
//     setIsCaptchaValid(false);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Check if the user input matches the generated captcha
//     setIsCaptchaValid(userInput === captcha);
//   };

//   return (
//     <div>
//       <h2>Random Captcha Form</h2>
//       <form onSubmit={handleFormSubmit}>
//         {/* Display the captcha */}
//         <p>Enter the following captcha:</p>
//         <h1>{captcha}</h1>

//         {/* Input field for user entry */}
//         <label>
//           Enter Captcha:
//           <input type="text" value={userInput} onChange={handleInputChange} />
//         </label>

//         {/* Button to refresh captcha */}
//         <button type="button" onClick={handleCaptchaRefresh}>
//           Refresh Captcha
//         </button>

//         {/* Submit button */}
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display result */}
//       {isCaptchaValid && <p style={{ color: 'green' }}>Captcha is valid!</p>}
//       {!isCaptchaValid && userInput !== '' && <p style={{ color: 'red' }}>Captcha is invalid. Please try again.</p>}
//     </div>
//   );
// };

// export default CaptchaForm;


import React, { useState } from 'react'


const generaterandomcaptcha= ()=>{
  const elements="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%&*"
  const len=6
  let captcha=""
  for(let i=0;i<len;i++){
    const random=Math.floor(Math.random()* elements.length)
    captcha += elements.charAt(random)
  }
  return captcha;
}

export const Captchaform = () => {
  const[captchas,setCaptchas]=useState(generaterandomcaptcha())
  const[input,setInput]=useState("")
  const[valid,setValid]=useState(false)

  //value getting for inputchange
  const handleInput=(e)=>{
    setInput(e.target.value)
  }

  //refresh
  const refreshingCaptcha=()=>{
    setCaptchas(generaterandomcaptcha())
    setInput("")
    setValid(false)
  }

  //submit
  const handlesubmit=(e)=>{
    e.preventDefault()
    setValid(input===captchas)
  }

  return (
    <div>
      <h2>Captcha Submission Form</h2>
      
       {/* Display the captcha */}
      <form onSubmit={handlesubmit}>
      <h1>{captchas}</h1>

      {/* inputfield */}
      <label>Enter the Captcha:<input type='text' value={input} onChange={handleInput}></input></label>
      
      {/* Button for refresh */}
      <button type='button' onClick={refreshingCaptcha}>RefreshCaptcha</button>

      {/* submit btn */}
      <button type='submit'>Submit</button>

      {/* result display */}
      {valid && <p style={{color:"green"}}>Captcha is valid</p>}
      {!valid && input !== " " && <p style={{color:"red"}}>Captcha is Invalid.Try again</p>}
      </form>
    </div>
  )
}
export default Captchaform;