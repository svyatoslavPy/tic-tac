import React, {useState} from "react";

export const pickPlayerContext = React.createContext({
	pickPlayer: "",
	handleSetPickPlayer: () => {}
})


export const PickPlayerProvider = ({
	children
}) => {
  const [pickPlayer, setPickPlayer] = useState("");

  const handleSetPickPlayer = (player) => {
    setPickPlayer(player);
  }

  return (
		<pickPlayerContext.Provider value={{pickPlayer, handleSetPickPlayer}}>
			{children}
		</pickPlayerContext.Provider>
	)
}
