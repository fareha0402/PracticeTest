import React from 'react'

const Images = ({generateRandomNumber}) => {
    React.useEffect(() =>{
        Array(generateRandomNumber());
    },[])
    
    return (
        <div>
            <p>{generateRandomNumber()}</p>
            {[...Array(generateRandomNumber())].map((ele,i =1) =>(
             <img key={i++} src="https://picsum.photos/200/300" style={{padding:"3px"}}/>
            ))
        }
        </div>
    )
}

export default Images
