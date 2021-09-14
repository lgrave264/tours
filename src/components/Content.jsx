import React, { useState, useEffect } from 'react';
const data = 'https://course-api.com/react-tours-project';


const MultipleReturns = () => {
    const [user, setUser]= useState('default user')
    const [id, name, info, image] = data

    return <div>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <h2>{info}</h2>
        <img src={image}/>
    </div>;
};

export default MultipleReturns;