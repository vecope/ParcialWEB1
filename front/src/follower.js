/**
 * Created by Camilo on 21/09/17.
 */
import React, {Component} from 'react';
import propTypes from 'prop-types';

class Follower extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <img src={this.props.git.user.profile_pic} alt={this.props.git.user.name}/>
            <div className="name">{this.props.git.user.name}</div>
        </div>
    }
}
Follower.propTypes = {
    tweet: propTypes.object.isRequired
};


export default Follower;
}