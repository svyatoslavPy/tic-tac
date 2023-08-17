import { Board } from "../Board/Board"
import { Title } from "./Title"
import { GameStartLayout } from "../../layouts/GameStartLayout"

export const StartGame = () => {
  return (
    <GameStartLayout>
      <Title />
      <Board />
    </GameStartLayout>
  )
}
