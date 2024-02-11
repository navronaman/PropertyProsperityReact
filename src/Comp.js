import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // this is when i call the api for like default stuff
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

  // i will use flask api to get the search stuff

  const[SearchedData, setSearchedData] = useState(null);
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
          setSearchedData(data);
          setZestimate(data.zestimate);
          setPriceChange(data.price);
          setImagesArray(data.images);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  // price min
  // price max
  // sqft min
  // sqft max
  // beds min
  // beds max
  // baths min
  // baths max
  // isApartment
  // isCondo
  // isTownhouse

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

          <form>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </label>
            <label>
              Price:
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <button type="button" onClick={makeSearchBetter}>
              Search
            </button>
          </form>
        </div>
      )}

      <div>
        {imagesArray.map((image, index) => (
          <img key={index} src={image} alt="House" />
        ))}
      </div>

    </div>
  );
}

export default App;
