import React, { useState, useEffect } from 'react';
import Load from '../components/Loadinggif';
import Error from '../components/Erorr';
const check = 'https://api.github.com/users/QuincyLarson';

const Workinghour = () => {
    const [isLoading, setIsLoading]= useState(true)
    const [isError, setIsError]= useState(false)

    useEffect(()=>{
        fetch(check)
        .then((response)=>response.json())
        .then(()=>{
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    })
    .catch((error)=>console.log(error))
    })
    if(isError){
    return(
        <div>
            <h1><Error/></h1>
        </div>
    )
    }
  if(isLoading){
    return(
      <div>
        <Load/>
      </div>
    )
  }

  return <div>
    example
  </div>;
};

export default Workinghour;
