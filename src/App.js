import React, { Component } from 'react';
import './App.css';
import ItemPlayerComponent from './components/ItemPlayer/ItemPlayerComponent';

class App extends Component {
	constructor(props) {
		super(props);
    this.state = {
      players: [],
    };
    this.initEurosportData();
  }

	initEurosportData() {
		if (window.fetch) {
      fetch('https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json')
				.then(response => {
					return response.json();
				})
				.then(data => {
          this.setState({ players : data.players}, () => {
            console.info(this.state, 'this.state !');
          });
				})
				.catch(error => {
					console.info(error, 'error !');
				});
		}
	}

	render() {

		return (
			<div className="App">
				<div className="App-wrapper">
					{this.state.players.map((item, i) => {
						return <ItemPlayerComponent key={i} idItem={i} player={item} />;
					})}
				</div>
			</div>
		);
	}
}

export default App;
