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
            return <h3>No hay seguidores que mostrar</h3>
        }
        else{
           return <h3>{this.props.followers.length}</h3>
        }
    }

    render() {
        return (<div>
            <div>
                {this.renderFollowers()}
            </div>
            {this.validate()}
        </div>);
    }
}

export default FollowerList;