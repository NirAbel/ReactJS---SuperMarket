import * as React from 'react';
import "./heading.css"
 
class Heading extends React.Component {

    public render() { 
        return (
            <div className="heading">
                <h2>
                    &rarr;
                    
                    {this.props.children}

                    &larr;
                </h2>
            </div>
          );
    }
}
 
export default Heading;