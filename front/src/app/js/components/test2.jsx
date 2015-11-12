import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import '../../stylesheets/styles.scss';

 
class Test2 extends React.Component {
    
	/*static getStores() { return null; }
	static getPropsFromStores() { return null; }*/

    render() {
        return (
            <div>
                Hello {this.props.name}! Page de test 2
            </div>
        );
    }
}

export default Test2;