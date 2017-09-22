import React, {Component} from 'react';
import FollowerList from './FollowerList.js';
import './App.css';

class App extends Component {

    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            name: "",
            followers: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {

        console.log('handleSubmit');
        const value = document.getElementById("inputName").value

        this.setState({
            name: value
        });

        console.log('A name was submitted: ' + this.state.name);

        const route = "/followers/"+this.state.name;

        console.log("ruta: "+route);

        if(this.state.name!="") {
            console.log("hay fetch");
            fetch(route).then(response => response.json())
                .then(json => {
                    this.setState({
                        followers: json.data
                    });
                });
        }
        else{
            followers: []
        }

        event.preventDefault();
    }


    renderSearch() {
        console.log('renderSearch');
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" id="inputName" placeholder="Somebody"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }

    render() {
        console.log('render');
        return (
            <div className="App">
                <h1>Followers</h1>
                <div>
                    {this.renderSearch()}
                </div>
                <FollowerList followers={this.state.followers}/>
            </div>
        );
    }
}

export default App;
