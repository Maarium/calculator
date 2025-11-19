import React, { useState } from "react";
import './Calculate.css'
export default function Calculate() {
  const [value, setValue] = useState("");
   const buttons = [
    "C",
     "1", "2", "3", "+",
     "4", "5", "6", "-",
     "7", "8", "9", "*",
     "/", "=", "0"
     
   ];
   function handleClick(val) {
     if (val === "C") {
       setValue("");
     } else if (val === "=") {
       try {
         setValue(eval(value).toString());
       } catch {
         setValue("Error");
       }
     } else {
       setValue(value + val);
     }
   }
   return (
     <div className="calculator-main">
      <div className="calc">
       <input type="text" value={value} readOnly/>
       <div className="calculator-container">
       {
       buttons.map((btn, i) => (
         <button key={i} onClick={() => handleClick(btn)}>
           {btn}
         </button>
       ))
       }
       </div>
       </div>
     </div>
   );
}



// import React, { useState } from "react";
// const Calculate = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <div className="faq">
//       <div className='upper' onClick={() => setShow(!show)}>
//       <p >
//         {show ? "showing" : "hideing"} 
//       </p>
//       <p>down</p>
//       </div>
//       <div className='lower'>
//       {show && <p>Hello! I am visible.</p>}
//       </div>
//     </div>
//   );
// };
// export default Calculate;


// import React, { useState } from "react";
// const Calculate = () => {
//   const [name, setName] = useState("");
//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Enter your name" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//       />
//       <p>Your name is: {name}</p>
//     </div>
//   );
// };
// export default Calculate;



// import React, { useState } from "react";
// const BgColor = () => {
//   const [color, setColor] = useState("white");
//   return (
//     <div style={{ backgroundColor: color, height: "100vh", borderRadius: "50%" }}>
//       <button onClick={() => setColor("lightblue")}>Blue</button>
//       <button onClick={() => setColor("lightgreen")}>Green</button>
//       <button onClick={() => setColor("lightpink")}>Pink</button>
//     </div>
//   );
// };
// export default BgColor;

