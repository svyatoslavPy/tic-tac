import X from '../../images/icon-x.svg';
import O from '../../images/icon-o.svg';
import btnRestart from '../../images/btn-restart.svg';
import { useContext } from 'react';
import { SquareContent } from '../../сontext/SquareContenxt';


export const Title = () => {
   const { setSquares } = useContext(SquareContent)
  
	return (
		  <div className="game-start__title">
        <div className="game-start__logo">
          <img src={X}
            alt="X"/>
          <img src={O}
            alt="O"/>
        </div>
        <button className='game-start__btn'>
          <p>Turn</p>
        </button>
        <img onClick={() => {
          setSquares(Array(0).fill(null))
        }} className='game-start__btn--restart'
          src={btnRestart}
          alt="btn-restart"/>
      </div>
	)
}