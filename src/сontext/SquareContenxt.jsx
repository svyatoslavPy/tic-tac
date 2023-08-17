import React, {useState} from "react";


export const SquareContent = React.createContext({
	squares: []
})





export const SquarePrivider = ({
	children
}) => {
   const [squares, setSquares] = useState(Array(0).fill(null));


  return (
		<SquareContent.Provider value={{
			squares, setSquares
		}}>
			{children}
		</SquareContent.Provider>
	)
}
