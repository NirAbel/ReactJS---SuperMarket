import React, { Component } from 'react'
import "./tester.css"

interface TesterProps{
    x: number;
    y: string;
}

interface TesterState{
    a: number;
    b: string;
}

export class Tester extends Component<TesterProps, TesterState>{

    public constructor(props: TesterProps){
        super(props);
        this.state={
            a: 123,
            b: "hi"
        };
    }

    public render():JSX.Element{
        return(
            <div className= "tester">
                <p>
                    x: {this.props.x}
                    <br/>
                    y: {this.props.y}
                    <br/>
                    a: {this.state.a}
                    <br/>
                    b: {this.state.b}
                </p>
            </div>
        );
    }
}