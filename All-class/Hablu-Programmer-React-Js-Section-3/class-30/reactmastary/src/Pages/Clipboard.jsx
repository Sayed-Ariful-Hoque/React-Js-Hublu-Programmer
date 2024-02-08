import React from "react";


function Clipboard (){

    const Copytext = () =>{
        alert("copy Text alart ")
    }
    
    const Cuttext = () =>{
        alert("cut text alart")
    }
    const Pasttext = () =>{
        alert("text past ")
        document.write("text past done")
    }
    return(
        <div>
            <p onCopy={Copytext}>this is clipboaard</p>
            <p onCut={Cuttext}>this is cut text alint</p>
            <input onPaste={Pasttext} type="text"  placeholder="her cut your pus"/>
        </div>
    )
}

export default Clipboard
