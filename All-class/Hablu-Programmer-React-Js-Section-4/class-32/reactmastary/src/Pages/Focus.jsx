 import React from "react"


 function Focus (){

    const FocusText = () =>{
        alert("text on focus ")
    }
    const BlurText = () =>{
        alert("blur text")
    }
    return(
        <div><br /><br />
            <input type="text" onFocus={FocusText} placeholder="focus text" /><br /><br />
            <input type="text" onBlur={BlurText} placeholder="blur text" />
        </div>
    )
 }

 export default Focus