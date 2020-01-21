import React, { Component } from 'react'
import "./about.css"
import { Tester } from '../tester/tester'
import Thumbnail from '../thumbnail/thumbnail';
import Heading from '../heading/heading';

export class About extends Component {
    public render(): JSX.Element {
        return (
            <div className="about">
                <Heading>About</Heading>

                <Thumbnail imageSource="/assets/images/imageHome.jpg"
                    imageWidth={100}
                    imageHeight={80} />

                <Thumbnail imageSource="/assets/images/imageHome.jpg"
                    imageWidth={100}
                    imageHeight={80} />

                <Tester x={100} y="hello" />
            </div>
        );

    }
}