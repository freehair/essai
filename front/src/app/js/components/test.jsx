import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
 
class Test extends React.Component {
    
	/*static getStores() { return null; }
	static getPropsFromStores() { return null; }*/

    render() {
        return (
            <div>
                Hello {this.props.name}! Page de test
            </div>
        );
    }
}


export default Test;