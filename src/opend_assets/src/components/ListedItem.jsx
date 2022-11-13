import React, { useEffect, useState } from 'react';
import {idlFactory} from "../../../declarations/Entry";
import {Actor, HttpAgent} from "@dfinity/agent";
import {Principal} from "@dfinity/principal";
import { opend } from '../../../declarations/opend/index';

function ListedItem(props){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const [meTo, setMeTos] = useState(0);

    const [isPublic, setIsPublic] = useState('No');
    const [counter, setCounter] = useState("");


    const localhost = "http://localhost:8080/";
    const agent = new HttpAgent({host: localhost});
    agent.fetchRootKey()

    let EntryActor;

    async function loadEntry(){
        EntryActor = await Actor.createActor(idlFactory, {
            agent,
            canisterId: Principal.fromText(props.id)
        });

        const title = await EntryActor.getTitle();
        const content = await EntryActor.getContent();
        const ans = await EntryActor.getIsPublic();
        const meeTooCount = await EntryActor.getMeToos();

        setIsPublic(ans);
        setTitle(title);
        setContent(content);
        setMeTos(meeTooCount);
    }

    async function makePublic(){
        await opend.addAnonEntry(Principal.fromText(props.id));
        await EntryActor.setIsPublic(true);
        const ans = await EntryActor.getIsPublic();
        console.log("ans is " + ans);
        setIsPublic(ans);
        console.log(isPublic);
    }

    useEffect(() => {
        loadEntry();
    })

    async function addLike(){
        await EntryActor.incrementMeeTooCount();
        const meeTooCount = await EntryActor.getMeToos();
        console.log(meeTooCount);
        setMeTos(meeTooCount);
    }

    return (
        <div className={(props.type != 3)?'listed-item':'listed-item page-entry'}>
            <div className='blog-entry-box'>
                <h2 className = 'blog-entry-title'>{title}</h2>
                <p className='blog-entry-content'>
                    {(props.type != 3)? content.substring(0, 150) + "...": content }
                </p>
                <div className = "bottom-links">
                    {props.type == 0 && isPublic=="No" && <a className = "public-btn" onClick={(e) => makePublic()}> <button>Make Public</button></a>}
                    {isPublic=="Yes" && props.type == 0 && meTo != "0" &&<p className = "counter-label"> {"" + meTo} Person(s) understand</p>}
                    {props.type != 3 && <a href = {"/entries/" + props.id}>See Full Text</a>}
                    {props.type == 3 && isPublic=="Yes" && <a className= "me-too-btn" onClick={(e) => addLike()}> <button>I've been there</button></a>}
                </div>
                
            </div>
        </div>
    )
}

export default ListedItem;