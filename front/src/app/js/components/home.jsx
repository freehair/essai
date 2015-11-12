import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
 
class Home extends React.Component {
    
	/*static getStores() { return null; }
	static getPropsFromStores() { return null; }*/

    render() {
        return (
            <div>
                Hello {this.props.name}! page Home
            </div>
        );
    }
}

export default Home;