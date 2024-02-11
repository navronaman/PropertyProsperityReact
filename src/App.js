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
      <br/>
      <br/>
    </div>

  
  );
}

export default App;
