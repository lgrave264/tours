import React from 'react'
// import tourSpots from '../components/Errorloading';

const Tour = ({tours}) => {
    function remove(id){
        
    }
    return (
        <div>
            <h1 id='pageHeader'>Our Tours</h1>
            <hr/>
            {tours.map((tour) => {
                const {id, name, image, info} = tour;
                return (
                    <div key={id}>
                        <h1>{name}</h1>
                        <hr/>
                        <img src={image} alt={id} />
                        <hr />
                        <h5>{info}</h5>
                        <button onClick={remove(id)}>Not Interested</button>
                    </div>
                )
            })}
        </div>
    )
}


export default Tour