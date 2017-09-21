/**
 * Created by Camilo on 21/09/17.
 */
import React, {Component} from 'react';
import Follower from './Follower'

class FollowerList extends Component {
    constructor(props) {
        super(props)
    }


    renderFollowers() {
        return this.props.followers.map((t, i) => {
            return <Follower follower={t} key={i}/>;
        });
    }


    render() {
        return (<div>
            <div>
                {this.renderFollowers()}
            </div>
            <h3>{this.props.followers.length}</h3>
        </div>);
    }
}

export default FollowerList;