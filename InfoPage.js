import React from 'react'
import { useState } from 'react'

function pro(){
    const [pro, setPro] = useState({

        Image: "src.jpg",
        Price: 0,
        Address: "str",

});
}

const updateImage = () => {
    setPro(previousState => {
        return {...previousState, Image: null}
    });
}

const updatePrice = () => {
    setPro(previousState => {
        return {...previousState, Price: null}
    });
}

const updateAddress = () => {
    setPro(previousState => {
        return {...previousState, Address: null}
    });
}

export default function InfoPage() {
  return (
    <div>
        

        








    </div>
  )
}
