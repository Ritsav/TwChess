import { useRef, useState } from 'react'
import { Chessboard } from 'react-chessboard'
import { Chess } from 'chess.js'

const CustomChessboard = () => {
  const chessGameRef = useRef(new Chess())
  const chessGame = chessGameRef.current

  const [chessPosition, setChessPosition] = useState(chessGame.fen())
  const [draggedSquare, setDraggedSquare] = useState('')
  const [draggedPiece, setDraggedPiece] = useState('')
  const [sourceSquare, setSourceSquare] = useState('')
  const [targetSquare, setTargetSquare] = useState('')
  const [droppedPiece, setDroppedPiece] = useState('')

  function onPieceDrop({ sourceSquare, targetSquare, piece })
  {
    try
    {
      setSourceSquare(sourceSquare)
      setTargetSquare(targetSquare)
      setDroppedPiece(piece.pieceType)

      chessGame.move({ from: `${sourceSquare}`, to: `${targetSquare}`})
      setChessPosition(chessGame.fen())

      console.log('OnDropEvent')
      console.log(`Dropped to square: ${targetSquare}`)
      console.log(`Dropped piece: ${piece.pieceType}`)
    }
    catch
    {
      console.log('OnDropEvent')
      console.log(`Dropped to square: ${targetSquare}`)
      console.log(`Dropped piece: ${piece.pieceType}`)
    }
  }

  function onPieceDrag({ square, piece, isSparePiece })
  {
    setDraggedSquare(square || 'None')
    setDraggedPiece(piece.pieceType)

    console.log('OnDragEvent')
    console.log(`Dragged from square: ${square}`)
    console.log(`Dragged piece: ${piece.pieceType}`)
  }

  const chessBoardOptions = {
    position: chessPosition,
    onPieceDrag,
    onPieceDrop
  }

  return <Chessboard options={chessBoardOptions} />
}

export default CustomChessboard