import { useContext } from "react";
import { pickPlayerContext } from "../сontext/pickPlayerContext";

export const usePickPlayer = () => {
	const {pickPlayer, handleSetPickPlayer} = useContext(pickPlayerContext);

	return {
		pickPlayer, 
		handleSetPickPlayer
	}

}