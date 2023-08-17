import { Square } from "./Square"
import { GameStartInner } from "../../layouts/GameStartInnerLayout"
import { useContext, useEffect, useMemo, useState } from "react"
import { pickPlayerContext } from "../../сontext/pickPlayerContext"
import { SquareContent } from "../../сontext/SquareContenxt"

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const Board = () => {
  const { pickPlayer } = useContext(pickPlayerContext);
  const { squares, setSquares } = useContext(SquareContent)

  const [xIsNext, setXIsNext] = useState(pickPlayer === "X" ? true : false);
  const winner = useMemo(() => {
    return calculateWinner(squares)
  }, [squares])

  useEffect(() => {
    return () => {
      setSquares(Array(0).fill(null))
    }
  }, [setSquares])

  const emptyCheckSquare = (index) => {
    return squares[index] === "O" || squares[index] === "X" ? true : false;
  }

  const handleClick = (i) => {
    const nextSquares = [...squares];

    if (emptyCheckSquare(i) || calculateWinner(squares)) {
      return false;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <h1 className="game-start__status">Status: {winner}</h1>
      <GameStartInner>
        <Square value={
          squares[0]
        }
          onSquareClick={
            () => handleClick(0)
          } />
        <Square value={
          squares[1]
        }
          onSquareClick={
            () => handleClick(1)
          } />
        <Square value={
          squares[2]
        }
          onSquareClick={
            () => handleClick(2)
          } />
      </GameStartInner>
      <GameStartInner>
        <Square value={
          squares[3]
        }
          onSquareClick={
            () => handleClick(3)
          } />
        <Square value={
          squares[4]
        }
          onSquareClick={
            () => handleClick(4)
          } />
        <Square value={
          squares[5]
        }
          onSquareClick={
            () => handleClick(5)
          } />
      </GameStartInner>
      <GameStartInner>
        <Square value={
          squares[6]
        }
          onSquareClick={
            () => handleClick(6)
          } />
        <Square value={
          squares[7]
        }
          onSquareClick={
            () => handleClick(7)
          } />
        <Square value={
          squares[8]
        }
          onSquareClick={
            () => handleClick(8)
          } />
      </GameStartInner>
    </>
  )
}
