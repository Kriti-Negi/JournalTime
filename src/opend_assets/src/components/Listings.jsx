import React, { useEffect, useState } from 'react'
import {Principal} from "@dfinity/principal";
import {opend} from "../../../declarations/opend";
import CURRENT_USER_ID from "../index";
import ListedItem from './ListedItem'

function Listings(props){

    const [entryItems, setEntryItems] = useState();

    async function getEntryItems(){
        let items = [];
        if(props.type == 0){
            items = await opend.getAllEntriesOfOwner(CURRENT_USER_ID);
        }else if(props.type == 1){
            items = await opend.getAllEntriesAnonymous(CURRENT_USER_ID);
        }else{}
        
        setEntryItems(
            items.map((itemsId, elem) => {
                    return <ListedItem id = {itemsId.toText()} key = {elem} type = {props.type}/>
                }
            )
        )
    }

    useEffect(() => {
        getEntryItems();
    }, [])

    return (
        <div>
            <h1 className = "generic-header" >{props.title}</h1>
            <div className = "items">
                {entryItems}
            </div>
        </div>
    )
}

export default Listings;