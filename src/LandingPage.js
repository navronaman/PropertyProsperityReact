import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import index from './index.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import PropertyPage from './PropertyPage';

function Navbar(){
  
  return (
      <header className='navbar'>
              <h2 className='navbar-heading'>PropertyProsperity</h2>
              <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },
        }}
        className ='navbar-buttons'
      > 
      <ButtonGroup variant="text" aria-label="Basic button group">
          <Button sx={{paddingRight: '20px'}}>Home</Button>
          <Button sx={{paddingRight: '20px', paddingLeft: '20px'}}>About</Button>
          <Button sx={{paddingRight: '20px', paddingLeft: '20px'}}>Contact</Button>
          <Button sx={{paddingRight: '20px', paddingLeft: '20px'}}>Rent</Button>
          <Button sx={{paddingRight: '20px', paddingLeft: '20px'}}>Buy</Button>
        </ButtonGroup>
      </Box>
      </header>
      )
      }


export default function Component() {

  const navigate = useNavigate();
  const navigateToProperty = () => {
    navigate('/PropertyPage');
  }

  return (
    <><section className="w-full py-12 md:py-24 xl:py-32">
      <Navbar />
      <div id="stuff" className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
        <div id="stuff" className="">
          <h1 id="head" className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Find your dream home</h1>
          <p id="sub" className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400">
            Discover the perfect place to call your own<br></br>
            with our trusted listings.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <div id="butt" class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary btn-lg" onClick={navigate}>BUY</button>
            <button type="button" class="btn btn-primary btn-lg">RENT</button>
          </div>
        </div>
      </div>
    </section>
    <Routes>
        <Route path="/PropertyPage" element={<PropertyPage />} />
      </Routes></>
  );
}