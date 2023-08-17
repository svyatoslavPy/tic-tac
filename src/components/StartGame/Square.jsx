import { useEffect, useState } from 'react';
import O from '../../images/icon-o.svg';
import X from '../../images/icon-x.svg';

export const Square = ({
	value,
	onSquareClick
}) => {

	const [src, setSrc] = useState(null);

	useEffect(() => {
		if (value === "X") {
			setSrc(X);
		} else if (value === "O") {
			setSrc(O);
		}	else {
			setSrc("");
		}
	}, [value])

	return (
		<button
		onClick={() => {
			onSquareClick();
		}} 
		className="game-start__cell">
			<img src={src} alt="" />
		</button>
	)
}