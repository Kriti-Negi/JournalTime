import React, { useEffect } from "react";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Listings from "./Listings";
import NewEntry from "./NewEntry";
import {Journal} from "../../../declarations/Journal";
import {Principal} from "@dfinity/principal";
import CURRENT_USER_ID from "../index";
import ViewFullEntry from "./ViewFullEntry";
import ListedItem from "./ListedItem";


function Header(){
    return (
        <BrowserRouter forceRefresh={true}>
            <nav className="navbar">
                <div className="left-nav">
                    <h3 className="link">
                        <Link to="/">Journal Time</Link>
                    </h3>
                </div>
                <div className="right-nav">
                    <h4 className="link">
                        <Link to="/newEntry">
                            Create New Entry
                        </Link>
                    </h4>
                    <h4 className="link">
                        <Link to = "/myEntries">
                            Look at Previous Entries
                        </Link>
                    </h4>
                    <h4 className="link">
                        <Link to = "/anonymousEntries">
                            Anonymous Entries
                        </Link>
                    </h4>
                </div>
            </nav>

            <Switch>
                <Route exact path = "/">
                    <h1 className = "generic-header" >My Journal</h1>
                </Route>
                <Route exact path = "/myEntries">
                    <Listings type = {0} title = {"My Journal Entries"}/>
                </Route>
                <Route path = "/entries/*">
                    <ListedItem id = {window.location.pathname.substring(9)} type = {3}/>
                </Route>
                <Route path = "/newEntry">
                    <NewEntry/>
                </Route>
                <Route path = "/anonymousEntries">
                    <Listings type = {1} title = {"Anonymous Entries"}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Header;