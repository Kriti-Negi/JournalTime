import { useState } from "react";
import React from 'react';
import {opend} from "../../../declarations/opend";
import {HttpAgent} from "@dfinity/agent";
import {Principal} from "@dfinity/principal";

function NewEntry(){

    const localhost = "http://localhost:8080/";
    const agent = new HttpAgent({host: localhost});

    const [titleText, setTitleText] = useState("");
    const [entryText, setEntryText] = useState("");

    async function onSubmit(){
        const response = await opend.addEntry(titleText, entryText);
        console.log(response);
    }

    function updateEntryText(event){
        if(event.target.placeholder == "Entry Text"){
            setEntryText(event.target.value);
        }else{
            setTitleText(event.target.value);
        }
    }

    return(
        <div>
            <h1 className = "generic-header">Create new Entry</h1>
            <form className = "new-entry-form">
                <input className = "new-entry-title" type="text" placeholder='Entry Title' onChange={(e) => updateEntryText(e)} value ={titleText}></input>
                <textarea className = "new-entry-content" type="text" placeholder='Entry Text' onChange={(e) => updateEntryText(e)} value = {entryText}></textarea>
                <button className = "new-entry-button" onClick = {(e) => onSubmit()}>Add Entry</button>
            </form>
        </div>
    )
}

export default NewEntry;