import React, { useEffect, useState } from 'react'
import styles from './TictactoeBoard.module.css'

const TictactoeBoard = ({ setWinner, winner }) => {
  const [column, setColumn] = useState(7)
  const [isTick, setIsTick] = useState(false)
  const [board, setBoard] = useState(Array.from({ length: column * column }).fill(0))
  const [playerTurn, setPlayerTurn] = useState(0)


  const toggleTick = (index) => {

    let newBoard = [...board]
    newBoard[index] = !newBoard[index] &&( playerTurn === 0 ? 'O' : 'X')
    setBoard(newBoard)
    setPlayerTurn((prev) => prev === 0 ? 1 : 0)


  }


  const calculateWinner = async () => {

    for (let row = 0; row < column; row++) {
      let Xscore = 0;
      let Oscore = 0;

      for (let i = 0; i < column; i++) {
        if (board[row * column + i] === 'X') Xscore++;
        if (board[row * column + i] === 'O') Oscore++;
      }

      if (Xscore === column) return setWinner('Ayesha')
      if (Oscore === column) return setWinner('Sohel')
    }

    for (let col = 0; col < column; col++) {
      let Xscore = 0;
      let Oscore = 0;
      for (let i = 0; i < column; i++) {
        if (board[i * column + col] === 'X') Xscore++;
        if (board[i * column + col] === 'O') Oscore++;
      }

      if (Xscore === column) return setWinner('Ayesha')
      if (Oscore === column) return setWinner('Sohel')
    }


    let XscoreDiagonal1 = 0;
    let OscoreDiagonal1 = 0;
    let XscoreDiagonal2 = 0;
    let OscoreDiagonal2 = 0;

    for (let col = 0; col < column; col++) {

      //4
      //8
      // 12

      if (board[col * column + col] === 'X') XscoreDiagonal1++;
      if (board[col * column + col] === 'O') OscoreDiagonal1++;

      if (board[col * column - (column - col - 1)] === 'X') XscoreDiagonal2++;
      if (board[col * column - (column - col - 1)] === 'O') OscoreDiagonal2++;

      if (XscoreDiagonal1 === column ||XscoreDiagonal2 ===column ) return setWinner('Ayesha')
      if (OscoreDiagonal1 === column || OscoreDiagonal2===column ) return setWinner('Sohel')
    }









    // for (let row = 0; row < column; row++) {
    //   let Xscore = 0;
    //   let Oscore = 0;

    //   for (let i = 0; i < column; i++) {
    //     if (board[row * column + i] === 'X') Xscore++;
    //     if (board[row * column + i] === 'O') Oscore++;
    //   }

    //   if (Xscore === column) return setWinner('Player 2');
    //   if (Oscore === column) return setWinner('Player 1');
    // }

    // for (let col = 0; col < column; col++) {
    //   let Xscore = 0;
    //   let Oscore = 0;

    //   for (let row = 0; row < column; row++) {
    //     if (board[row * column + col] === 'X') Xscore++;
    //     if (board[row * column + col] === 'O') Oscore++;
    //   }

    //   if (Xscore === column) return setWinner('Player 2');
    //   if (Oscore === column) return setWinner('Player 1');
    // }

    // let XscoreDiagonal1 = 0;
    // let OscoreDiagonal1 = 0;
    // let XscoreDiagonal2 = 0;
    // let OscoreDiagonal2 = 0;


    // for (let i = 0; i < column; i++) {
    //   if (board[i * column + i] === 'X') XscoreDiagonal1++;
    //   if (board[i * column + i] === 'O') OscoreDiagonal1++;

    //   if (board[i * column + (column - 1 - i)] === 'X') XscoreDiagonal2++;
    //   if (board[i * column + (column - 1 - i)] === 'O') OscoreDiagonal2++;
    // }

    // if (XscoreDiagonal1 === column || XscoreDiagonal2 === column) return setWinner('Player 2');
    // if (OscoreDiagonal1 === column || OscoreDiagonal2 === column) return setWinner('Player 1');

  }

  useEffect(() => {
    calculateWinner()
  }, [playerTurn])


  return (
    <section className={styles.TictactoeBoard}
      style={{
        gridTemplateColumns: `repeat(${column},1fr)`,
        gridTemplateRows: `repeat(${column},1fr)`
      }}
    >
      {
        board.map((cell, i) => (

          <div
            key={i}
            onClick={() => !winner && toggleTick(i)}
            className={styles.tictacPixel}
            style={{
              backgroundColor: i % 2 === 0 ? 'white' : 'grey'
            }}
          >
            {cell === 'X' ? (
              <div className={styles.cross}></div>
            ) : cell === 'O' ? (
              <div className={styles.circle}></div>
            ) : null}

          </div>
        ))
      }

    </section>
  )
}

export default TictactoeBoard