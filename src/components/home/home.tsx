import React, { Component, SyntheticEvent } from 'react'
import "./home.css"
import Heading from '../heading/heading';

interface HomeState {
    imageWidth: number;
    discount: number;
    vegetables: { id: number, name: string }[]
}

export class Home extends Component<null, HomeState>{

    public constructor(props: null) {
        super(props);
        this.state = {
            imageWidth: 800,
            discount: 20,
            vegetables: [
                { id: 1, name: "Tomatoes" },
                { id: 2, name: "Carrots" },
                { id: 3, name: "Potatoes" },
                { id: 4, name: "Onions" }
            ]
        }

    }
    public render(): JSX.Element {
        return (
            <div className="home">
                <Heading>Welcome to Northwind Website!</Heading>
                <p> only now -{this.state.discount}% discount on all products </p>
                <img src="/assets/images/imageHome.jpg" width={this.state.imageWidth} />
                <section>
                    {/* <button onClick={this.doSomething}>I WANT TO BUY</button> */}
                    <button onClick={this.decreaseImage}>&darr;</button>
                    <button onClick={this.increaseImage}>&uarr;</button>
                    <br></br>
                    <input type="range" min="300" max="600" onChange={this.changeImageWidth} value={this.state.imageWidth} />
                    <hr></hr>
                    <h5>Top Products</h5>
                    <p>Apples</p>
                    <p>Bananas</p>
                    {this.isSummer() && <p>Watermelon</p>}
                    {this.isSummer() ? <p>No Avocados</p> : <p>Avocados</p>}
                    {this.state.vegetables.map(v => <p key={v.id}>{v.name}</p>)}

                </section>
            </div>
        );
    }
    //ארגס מכיל מידע על האובייקט שהתרחש
    // args.target- זה אובייקט שמייצג את התגית שהעלתה את האירוע
    private changeImageWidth = (args: SyntheticEvent) => {
        console.log(args);
        const value = +(args.target as HTMLInputElement).value;
        this.setState({ imageWidth: value })
    }

    // private doSomething():void{
    //     alert("image width is "+this.state.imageWidth);
    // }

    private isSummer(): boolean {
        const date = new Date();
        const month = date.getMonth() + 1;
        return month >= 6 && month <= 9;
    }

    private decreaseImage = (): void => {
        if (this.state.imageWidth > 300)
            this.setState({ imageWidth: this.state.imageWidth - 10 });
    }
    private increaseImage = (): void => {
        if (this.state.imageWidth < 600)
            this.setState({ imageWidth: this.state.imageWidth + 10 });
    }
}