import { X_PRIMARY, O_PRIMARY } from './index';
import { usePickPlayer } from '../../hooks/usePickPlayer';
import O_SPECIAL from '../../images/icon-o-special.svg';

export const ChoisePlayer = () => {
	const { pickPlayer, handleSetPickPlayer } = usePickPlayer();
	
	return (
			<div className="game-menu__choise">
				<p className='game-menu__text'>
					PICK PLAYER 1’S MARK
				</p>
				<div className='game-menu__pick'>
					<button onClick={() => handleSetPickPlayer("X")} className={`${pickPlayer === "X" ? 'game-menu__item--choise-special' : 'game-menu__item'}`}>
						<img src={X_PRIMARY} alt="X" />
					</button>
					<button onClick={() => handleSetPickPlayer("O")} 
					className={`${pickPlayer === "O" ? 'game-menu__item--choise' : 'game-menu__item '}`}>
						<img src={`${!pickPlayer ? O_PRIMARY : O_SPECIAL}`} alt="O" />
					</button>
				</div>
				<p className='game-menu__text--primary'>REMEMBER : {pickPlayer ? `${pickPlayer} GOES FIRST` : 'UNSELECTED'} </p>
			</div>
	)
}