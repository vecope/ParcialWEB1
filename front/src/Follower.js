/* Created by Camilo on 21/09/17. */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Follower extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.follower.login) {
            return (
                <div>
                    <div className="followerMain">
                        <img className="followerimg" src={this.props.follower.avatar_url} alt={this.props.follower.login+".avatar"}/>
                        <div className="followerBody">
                            <div className="followerName">{this.props.follower.login}</div>
                            <div><a href={this.props.follower.html_url}>GitHub</a></div>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        }
        ;
    }
}

// Follower.propTypes = {
//     follower: PropTypes.object.isRequired
// };

export default Follower;