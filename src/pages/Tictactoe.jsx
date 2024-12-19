import React, { useState } from 'react'
import styles from './Tictactoe.module.css'
import TictactoeBoard from '../components/TictactoeBoard'

const Tictactoe = () => {
  const [winner,setWinner] = useState('')
  return (
    <main className={styles?.Tictactoe}>
     {winner && <h1>{winner} Player is Winner</h1>}
      <TictactoeBoard setWinner={setWinner} winner={winner}/></main>
  )
}

export default Tictactoe