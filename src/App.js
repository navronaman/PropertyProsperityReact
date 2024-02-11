import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}]);
  const [randomNumber, setRandomNumber] = useState(0); // Corrected variable name

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/hello');
      result.json().then((json) => {
        console.log(json);
        setRandomNumber(json.random);
        setData(json);
      });
      console.log(result);
    };
    fetchData();
  }, []);


  return (
    <div className='app'>
      Random Number: {randomNumber}
      <div>
        {Object.keys(data).map((key, index) => (
          <p key={index}>
            <strong>{key}: </strong> {JSON.stringify(data[key])}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
