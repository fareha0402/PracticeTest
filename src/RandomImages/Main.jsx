import React from 'react'
import Images from './Images';
const Main = () => {
    const [name,setname] = React.useState('');
    let showMsg = false;
    function generateRandomNumber(){
        return Math.floor(Math.random()*10) +1;
    }
    function submit(e){
        debugger
            e.preventDefault();
            showMsg = true;
    }
    return (
        <div>
            <h3>Enter your Name</h3>
            <input onChange={(e)=>{setname(e.target.value)}}/>
            <button onClick={(e) => submit(e)}>Submit</button>
            {showMsg && name && <p>Welcome To Avengers Initiative {name}!!</p>}
            <Images generateRandomNumber={generateRandomNumber}/>
        </div>
    )
}


export default Main
