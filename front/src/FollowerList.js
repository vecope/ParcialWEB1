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

    validate(){
        if(this.props.followers.length==0){
            return <h3>Nothing to show here! Please type something in the search box!</h3>
        }
        else{
           return <h3>They've got: {this.props.followers.length} followers</h3>
        }
    }

    render() {
        return (<div>
            <div className="list">
                {this.renderFollowers()}
            {this.validate()}
            </div>
        </div>);
    }
}

export default FollowerList;