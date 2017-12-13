import React, {Component} from 'react';
import FollowerList from './FollowerList.js';
import History from './History.js'
import './App.css';

class App extends Component {

    constructor(props) {
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

        const route = "/followers/" + this.state.name;

        if (this.state.name != "") {
            fetch(route).then(response => response.json())
                .then(json => {
                    this.setState({
                        followers: json.data
                    }, () => {
                      console.log(this.state.followers);
                      this.forceUpdate()
                    });
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

        this.setState({
            name: value,
            history: hist
        },()=>{
           this.updateArray();
           this.forceUpdate()
        });

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
