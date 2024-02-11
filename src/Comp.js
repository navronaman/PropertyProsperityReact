import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/search',
        params: {
          location: 'new brunswick, nj',
          output: 'json',
          sortSelection: 'featured',
          isComingSoon: 'false',
          onlyWithPhotos: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '8960a9414bmsh79b0e7d134ed3eap198937jsn3a471298130f',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setData(response.data);
        console.log("Does this even work?")
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.log('There was an error!', error);
      }
    };

    fetchData();
  }, []);

  export default function ZpidBhai() {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');

    const [zestimate, setZestimate] = useState('');
    const [priceChange, setPriceChange] = useState('');
    const [imagesArray, setImagesArray] = useState([]);

    const makeSearchBetter = () => {
      if (location && price) {
        fetch('/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ location, price }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);

          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  }

  return (
    <div className="App">
      <h1>Zillow Data</h1>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>HAANJI HAANJI DEDO MIC PE LIGHTUP</p>
          <p>Address: {data.results[0].streetAddress}</p>
          <p>City: {data.results[0].city}</p>
          <p>City: {data.results[0].city}</p>
          {/* Add more data fields as needed */}
        </div>
      )}
    </div>
  );
}

export default App;
