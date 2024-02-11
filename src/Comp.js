import React, { useEffect, useState } from 'react';
import axios from 'axios';
import index from './index.css'

function App() {


  // i will use flask api to get the search stuff

  const [location, setLocation] = useState('');
  const [priceMin, setPriceMin] = useState('0');
  const [priceMax, setPriceMax] = useState('');
  const [sqftMin, setSqftMin] = useState('0');
  const [sqftMax, setSqftMax] = useState('');
  const [bedsMin, setBedsMin] = useState('0');
  const [bedsMax, setBedsMax] = useState('');
  const [bathsMin, setBathsMin] = useState('0');
  const [bathsMax, setBathsMax] = useState('');
  const [isApartment, setIsApartment] = useState(false);
  const [isCondo, setIsCondo] = useState(false);
  const [isTownhouse, setIsTownhouse] = useState(false);
  const [saleOrRent, setSaleOrRent] = useState('forSale');

  const[SearchedData, setSearchedData] = useState([]);

  const[ZPID, setZPID] = useState('');
  const[ZPIDData, setZPIDData] = useState([{}]);

  const makeSearchBetter = () => {
    if (location && priceMin && priceMax && sqftMin && sqftMax && bedsMin && bedsMax && bathsMin && bathsMax && saleOrRent) {
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

  // fetch ('/zpid')
  return (
    <div className="search-filter">
      <h1>Zillow Search Bar</h1>
        <div>      
          <form>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='search'
              />
            </label>

            <br />

            <label>
              Price Min:
              <input
                type="text"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
                className='pricemin'
              />
            </label>
            <label>
              Price Max:
              <input
                type="text"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
                className='others'
              />
            </label>

            <br />

            <label>
              Sqft Min:
              <input
                type="text"
                value={sqftMin}
                onChange={(e) => setSqftMin(e.target.value)}
                className='others'
              />
            </label>
            <label>
              Sqft Max:
              <input
                type="text"
                value={sqftMax}
                className='others'
                onChange={(e) => setSqftMax(e.target.value)}
              />
            </label>

            <br />

            <label>
              Beds Min:
              <input
                type="text"
                value={bedsMin}
                onChange={(e) => setBedsMin(e.target.value)}
                className='others'
              />
            </label>
            <label>
              Beds Max:
              <input
                type="text"
                value={bedsMax}
                onChange={(e) => setBedsMax(e.target.value)}
                className='others'
              />
            </label>

            <br />

            <label>
              Baths Min:
              <input
                type="text"
                value={bathsMin}
                onChange={(e) => setBathsMin(e.target.value)}
                className='others'
              />
            </label>
            <label>
              Baths Max:
              <input
                type="text"
                value={bathsMax}
                onChange={(e) => setBathsMax(e.target.value)}
                className='others'
              />
            </label>

            <br />

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

            <br />

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

        <div>
          {SearchedData && SearchedData.map((item, index) => (
            <div key={index}>
              <p>ZPID: {item.zpid}</p>
              <p>Address: {item.streetAddress}</p>
              <p>Price: {item.price}</p>
              <img src={item.imgSrc}/>
            </div>
          ))}
        </div>

    </div>
  );
}

export default App;