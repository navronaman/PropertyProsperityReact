import { useState, useEffect } from 'react'
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


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




    function SearchFilter(){

      const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

      return(
      <div>
        <div className='filter-div'>  <input placeholder='Search' className='search'></input>  </div>

          <div className='search-filter'>
          <div className='filter-div'>

            <div className='box-shadow'>
          <h1 className='filter'>Filters</h1>
          </div>

          <div className='sex'></div>
          </div>
          </div>


<FormGroup className='search-filter'>
  <div className='box-shadow-bottom'>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Apartments" />
      <FormControlLabel control={<Checkbox />} label="Condo" />
      <FormControlLabel control={<Checkbox />} label="Town House" />
      </div>
    </FormGroup>

          
        <div>
            <input type="text" placeholder="Min Price in USD"></input>
        </div>

      </div>
      )
    }




export default function PropertyPage() {
  return (
    <div>
        <Navbar />
        <SearchFilter />
    </div>
  )
}