import * as React from 'react';
import { Component } from 'react';
import { ProductModel } from '../../models/product-model';
import { Link, NavLink } from 'react-router-dom';
import Heading from '../heading/heading';

export interface DetailsState {
    product: ProductModel
}

class Details extends React.Component<any, DetailsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            product: null
        };
    }

    public componentDidMount(): void {
        const prodID = this.props.match.params.prodID; //  prodId מביא פרמטר מהראוטר בשם 
        setTimeout(() => {
            fetch(`http://localhost:3001/products/${prodID}`)
                .then(Response => Response.json())
                .then(product => this.setState({ product }))
                .catch(err => alert(err.message))
        }, 3000);
    }

    render() {
        return (
            <div className="details">
                <Heading>Your Details</Heading>
                    {!this.state.product &&      
                     <img src="/assets/images/tenor.gif"/>}
                
                {this.state.product &&
                    <React.Fragment>
                        <h3>Name: {this.state.product.name}</h3>
                        <h3>Price: {this.state.product.price}</h3>
                        <h3>Stock: {this.state.product.stock}</h3>
                        <img src={`/assets/images/products/${this.state.product.id}.jpg`} />
                        <br></br>
                        <br></br>
                        <NavLink to={`/products/`}>Back To List</NavLink>
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default Details;