import React from 'react'

const Tour = ({tour}) => {
tour.map((trips)=>{
    const {name,id,info,images}= trips
    return (
        <div>
            <h1 id='pageHeader'>Our Tours</h1>
            <hr/>
            {name}
        </div>
    )
})

    
}

export default Tour

