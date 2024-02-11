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
          'X-RapidAPI-Key': 'd7e75d25efmsh4de6e9164d6480bp1245a0jsn1294f76079f6',
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

  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');
  const [sqftMin, setSqftMin] = useState('');
  const [sqftMax, setSqftMax] = useState('');
  const [bedsMin, setBedsMin] = useState('');
  const [bedsMax, setBedsMax] = useState('');
  const [bathsMin, setBathsMin] = useState('');
  const [bathsMax, setBathsMax] = useState('');
  const [isApartment, setIsApartment] = useState('');
  const [isCondo, setIsCondo] = useState('');
  const [isTownhouse, setIsTownhouse] = useState('');
  const [saleOrRent, setSaleOrRent] = useState('forSale');

  const[SearchedData, setSearchedData] = useState(null);

  const makeSearchBetter = () => {
    if (location && priceMin && priceMax && sqftMin && sqftMax && bedsMin && bedsMax && bathsMin && bathsMax && isApartment && isCondo && isTownhouse && saleOrRent) {
      fetch('/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location, priceMin, priceMax, sqftMin, sqftMax, bedsMin, bedsMax, bathsMin, bathsMax, isApartment, isCondo, isTownhouse, saleOrRent}),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          setSearchedData(data);
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
              Price Min:
              <input
                type="text"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
              />
            </label>
            <label>
              Price Max:
              <input
                type="text"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </label>

            <label>
              Sqft Min:
              <input
                type="text"
                value={sqftMin}
                onChange={(e) => setSqftMin(e.target.value)}
              />
            </label>
            <label>
              Sqft Max:
              <input
                type="text"
                value={sqftMax}
                onChange={(e) => setSqftMax(e.target.value)}
              />
            </label>

            <label>
              Beds Min:
              <input
                type="text"
                value={bedsMin}
                onChange={(e) => setBedsMin(e.target.value)}
              />
            </label>
            <label>
              Beds Max:
              <input
                type="text"
                value={bedsMax}
                onChange={(e) => setBedsMax(e.target.value)}
              />
            </label>

            <label>
              Baths Min:
              <input
                type="text"
                value={bathsMin}
                onChange={(e) => setBathsMin(e.target.value)}
              />
            </label>
            <label>
              Baths Max:
              <input
                type="text"
                value={bathsMax}
                onChange={(e) => setBathsMax(e.target.value)}
              />
            </label>

            <label>
              isApartment:
              <input
                type="checkbox"
                checked={isApartment}
                onChange={(e) => setIsApartment(e.target.checked)}
              />
            </label>

            <label>
              isCondo:
              <input
                type="checkbox"
                checked={isCondo}
                onChange={(e) => setIsCondo(e.target.checked)}
              />
            </label>

            <label>
              isTownhouse:
              <input
                type="checkbox"
                checked={isTownhouse}
                onChange={(e) => setIsTownhouse(e.target.checked)}
              />
            </label>

            <label>
              For Sale:
              <input
                type="radio"
                value="forSale"
                checked={saleOrRent === 'forSale'}
                onChange={(e) => setSaleOrRent(e.target.value)}
              />
            </label>

            <label>
              For Rent:
              <input
                type="radio"
                value="forRent"
                checked={saleOrRent === 'forRent'}
                onChange={(e) => setSaleOrRent(e.target.value)}
              />
            </label>

            <button type="button" onClick={makeSearchBetter}>
              Search
            </button>
          </form>
        </div>
      )}

    </div>
  );
}

export default App;
