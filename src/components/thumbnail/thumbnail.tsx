import * as React from 'react';
import { Component } from 'react';
import "./thumbnail.css"
export interface ThumbnailProps {
    imageSource: string;
    imageWidth?: number;
    imageHeight?: number;
}
 
class Thumbnail extends Component<ThumbnailProps> {
    public render() { 
        return (
            <div className= "thumbnail">
                <img src={this.props.imageSource}
                width={this.props.imageWidth || 80}
                height={this.props.imageHeight || 80} />
            </div>
            
          );
          
    }
}
 
export default Thumbnail;