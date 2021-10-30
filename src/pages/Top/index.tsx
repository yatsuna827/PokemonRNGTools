import React from 'react'
import { Link } from 'react-router-dom'

export const Top: React.FC = () => {
  return (
    <>
      よおこそ
      <ul>
        <li>
          <Link to="/daily">日替わり乱数</Link>
        </li>
        <li>
          <Link to="/initial-seed">起動時刻計算</Link>
        </li>
      </ul>
    </>
  )
}
