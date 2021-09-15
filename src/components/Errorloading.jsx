import React, {useState, useEffect} from 'react';
import Load from '../components/Loadinggif';
import Error from '../components/Erorr';
import Tour from './Tour';


const Errorloading = () => {
    const url = 'https://course-api.com/react-tours-project';
    const [isLoading, setIsLoading]= useState(false);
    const [isError, setIsError]= useState(false);
    const [tourSpots, setTourSpots] = useState([]);
    
    const getData = async () => {
        const response = await fetch(url);
        const spots = await response.json();
        setTourSpots(spots);
        
        //console.log(spots)
        //console.log(response+'looop')
        
    }

    

    useEffect(()=>{
        getData()
        setIsLoading(false)
        // .then(setIsLoading(false))
        // .catch((error) =>{
        //     console.log(error)
        //     setIsError(true)
        // })
    },[])
    // const  {id,name,info,image}= tourSpots;
    // console.log(tourSpots)

    
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

  return (
    <>
        <p>Our Tours</p>
        <Tour  tour={tourSpots}></Tour>
    </>
)
    }
    

export default Errorloading;
