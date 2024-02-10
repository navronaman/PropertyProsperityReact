// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState([{}]);
//   const [minThreshold, setMinThreshold] = useState('');
//   const [maxThreshold, setMaxThreshold] = useState('');
//   const [randomNumber, setRandomNumber] = useState(0); // Corrected variable name
//   const [therandomNumber, setTheRandomNumber] = useState(null); // Corrected variable name

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch('/hello');
//       result.json().then((json) => {
//         console.log(json);
//         setRandomNumber(json.random);
//         setData(json);
//       });
//       console.log(result);
//     };
//     fetchData();
//   }, []);

//   const handleGenerateRandomNumber = async () => {
//     const response = await fetch('/generate_random_number', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         min_threshold: minThreshold,
//         max_threshold: maxThreshold,
//       }),
//     });
//     const data = await response.json();
//     setTheRandomNumber(data.random_number);
//   };

//   return (
//     <div className='app'>
//       Random Number: {randomNumber}
//       <div>
//         {Object.keys(data).map((key, index) => (
//           <p key={index}>
//             <strong>{key}: </strong> {data[key]}
//           </p>
//         ))}
//       </div>

//       <div>
//         <input
//           type='number'
//           placeholder='Min Threshold'
//           value={minThreshold}
//           onChange={(e) => setMinThreshold(e.target.value)}
//         />
//         <input
//           type='number'
//           placeholder='Max Threshold'
//           value={maxThreshold}
//           onChange={(e) => setMaxThreshold(e.target.value)}
//         />
//         <button onClick={handleGenerateRandomNumber}>Generate Random Number</button>
//         {therandomNumber !== null && <p>Random Number: {therandomNumber}</p>}
//       </div>
//     </div>
//   );
// }

// export default App;
