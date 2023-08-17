import X from '../../images/icon-x.svg';
import O from '../../images/icon-o.svg';

export const Title = () => {
	return (
		<div className="game-menu__title">
				<img src={X} alt="X" />
				<img src={O} alt="O" />
		</div>
	)
}