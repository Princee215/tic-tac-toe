import { useState } from "react";

export default function PlayersInfor({initialName, symbol, isActive, onChangeName}) {
	const [playerName, setPlayerName] = useState(initialName);
	const [ isEditing, setIsEditing ] = useState(false);

	const handleClick = () => {
		setIsEditing(editing => !editing);

		if(isEditing){
			onChangeName(symbol, playerName);
		}
	}

	const handleChange = (event) => {
		setPlayerName(event.target.value);
	}

	let content;
	if(isEditing)content = <input type="text" value={playerName} onChange={handleChange} required />;
	else content = <span className="player-name">{playerName}</span>;

  	return (
    	<li className={isActive ? 'active':undefined}>
      		<span className="player">
        		{content}
        		<span className="player-symbol">{symbol}</span>
      		</span>
      		<button onClick = {handleClick}>{ isEditing ? 'Save' : 'Edit'}</button>
    	</li>
  	);
}
