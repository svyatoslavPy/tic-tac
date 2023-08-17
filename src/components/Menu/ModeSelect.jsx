import { useNavigate } from 'react-router-dom';

export const ModeSelect = () => {
	const navigate = useNavigate();

	return (
		<>
			<button onClick={
				() => navigate('/start')
			}
				className='game-menu__btn'>NEW GAME (VS CPU)</button>
			<button onClick={
				() => navigate('/start')
			}
				className='game-menu__btn game-menu__btn--special'>NEW GAME  (VS PLAYER)</button>
		</>
	)
}
