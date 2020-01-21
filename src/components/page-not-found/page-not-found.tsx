import React, { Component } from 'react'
import "./page-not-found.css"
import Heading from '../heading/heading';

export class PageNotFound extends Component{
    public render():JSX.Element{
        return(
            <div className= "page-not-found">
                <Heading>the page you are looking for doesn't exist</Heading>
            </div>
        );
    }
}