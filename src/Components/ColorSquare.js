import React, {useState} from 'react'
import "../App"
import '../Styling/ColorSquare.css'



const ColorSquare = (props)=> {

    const [URLroute, setURL] =useState(props.URL);
    console.log(URLroute);

    const testOnClick = () =>{
        console.log("I've been clicked!");
    }
    return (
        <div>

        </div>
    )
}
export default ColorSquare;