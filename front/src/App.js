import React, {Component} from 'react';
import SearchBox from './SearchBox.js';
import FollowerList from './FollowerList.js';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            followers: [
            ]
        };
    }


    componentDidMount() {
        fetch("/followers/john-guerra").then(response => response.json())
            .then(json => {
                console.log("Llega");
                console.log(json);
                this.setState({
                    followers: json.data
                });
            });
    }


    render() {
        return (
            <div className="App">
                <h1>Followers</h1>
                <div>
                    <SearchBox/>
                </div>
                <FollowerList followers={this.state.followers}/>
            </div>
        );
    }
}

export default App;
