import React, { useState } from "react";

export default function Search(){

    const [userInput, setUserInput] = useState();
    const [message, setMessage] = useState('');
    // method to search images based on user input
    const search = ()=>{
        console.log("search fucntion")
        if(userInput){
        window.open("https://www.google.com/search?q="+userInput, "_blank");
        }else{
            setMessage("Please enter text to search");
        }
    }

// method to take userinputs from text field
    const inputSearch = (event)=>{
        console.log("input search method", event.target.value);
        setUserInput(event.target.value);
        console.log("userInput", userInput);
        document.getElementsByTagName('button').disabled = 'false';
    }

    return(
        <>
          <form>
            <div className="form-group">
                <input id="search" type="text" className="form-control" placeholder="Enter text to Generate images" onChange={inputSearch} />
                {/* <p className="alert alert-danger">{message!=''? message: null}</p> */}
               <button className="btn btn-success my-2" onClick={search} disabled>Search</button>
            </div>
          </form>
        </>
    )
}