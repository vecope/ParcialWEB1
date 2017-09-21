/* Created by Camilo on 21/09/17. */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Follower extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<div>
            <div className="currentUserName">{this.props.follower.login}</div>
        </div>)};

}

// Follower.propTypes = {
//     follower: PropTypes.object.isRequired
// };

export default Follower;