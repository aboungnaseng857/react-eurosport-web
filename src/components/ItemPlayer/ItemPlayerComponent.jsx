import React, { Component, } from 'react';
import './ItemPlayer.css';

class ItemPlayerComponent extends Component {
	render() {
		const { player, idItem } = this.props;
		const weightKG = parseInt(player.data.weight, 10) / 1000;
		const totalWin = player.data.last.filter(win => win === 1);
		const totalLose = player.data.last.filter(lose => lose === 0);
		const idItemName = 'id-item-player-' + idItem;

        return (
			<div id={idItemName} className="item-player-component">
				<div className="item-logo">
					<img src={player.picture} alt={player.firstname} />
				</div>
				<div>
					<span>{player.firstname}</span>
					&nbsp;<span>{player.lastname}</span>
				</div>
				<div className="item-country">
					<span>({player.shortname})</span>
					<span>
						<img src={player.country.picture} alt={player.shortname} />
					</span>
				</div>
				<div className="item-informations">
					<div>
						<span>Ranks : </span>
						<span>{player.data.rank}</span>
					</div>
					<div>
						<span>Points : </span>
						<span>{player.data.points}</span>
					</div>
					<div>
						<span>Weight : </span>
						<span>{weightKG}kg</span>
					</div>
					<div>
						<span>Height : </span>
						<span>{player.data.height}</span>
					</div>
					<div>
						<span>Age : </span>
						<span>{player.data.age}</span>
					</div>
					<div>
						<span>Total Win : </span>
						<span>{totalWin.length}</span>
					</div>
					<div>
						<span>Total Lose : </span>
						<span>{totalLose.length}</span>
					</div>
					<div>
						<span>Last : </span>
						<span>
							{player.data.last.map((win, i) => {
								return <span key={i}>{win}&nbsp;</span>;
							})}
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ItemPlayerComponent;
