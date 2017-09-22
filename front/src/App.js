import React, {Component} from 'react';
import FollowerList from './FollowerList.js';
import History from './History.js'
import './App.css';

class App extends Component {

    constructor(props) {
        console.log('Constructor');
        super(props);

        this.state = {
            name: "",
            followers: [],
            history: [],
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    updateArray() {


        const value = document.getElementById("inputName").value;

        console.log('Hay cambio en nombre:' + value);
        console.log('Quedó: ' + this.state.name);

        console.log('A name was submitted: ' + this.state.name);

        const route = "/followers/" + this.state.name;

        console.log("ruta: " + route);

        if (this.state.name != "") {
            console.log("pasa por aca");
            fetch(route).then(response => response.json())
                .then(json => {
                    this.setState({
                        followers: json.data
                    }, console.log(json));
                });
        }
        else {
            followers: []
        }

    }


    handleSubmit(event) {

        var value = document.getElementById("inputName").value;
        var hist = this.state.history;
        hist.push(value);

        console.log('handleSubmit: ' + value);


        this.setState({
            name: value,
            history: hist
        });


        console.log("Updated")
        this.updateArray();

        event.preventDefault();
    }


    renderSearch() {
        return (
            <form className="searchForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input name="name" id="inputName" placeholder="Somebody"/>
                    <button id="inputButton" type="submit">Submit</button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="navigation">
                    <div className="navLeft">
                        Main actor: {this.state.name}
                    </div>
                    <div className="navRight">
                            {this.renderSearch()}
                    </div>
                </div>
                <div className="content">
                <History history={this.state.history}/>
                <FollowerList followers={this.state.followers}/>
                </div>
            </div>
        );
    }
}

export default App;
