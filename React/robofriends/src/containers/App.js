import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import 'tachyons';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    onsearchChange = (event) => {
        this.setState({searchfield: event.target.value});

    };
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
                .then(users => this.setState({robots: users}));
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return !robots.length ? <h1 className='f1'>Loading...</h1> :            // console.log(filterRobots);
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onsearchChange}/>
                    <Scroll id='scroll'>
                        <CardList robots={ filterRobots }/>
                    </Scroll>
                </div>
            );
        }

}

export default App;